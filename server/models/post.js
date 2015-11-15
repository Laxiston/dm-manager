var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
	content: String,
	rating: {type: Number, default: 0},
  user_id: {type: Schema.Types.ObjectId, ref: "User"},
  topic_id: {type: Schema.Types.ObjectId, ref: "Topic"},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  created_at: {type: Date, default: Date.now}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
PostSchema.plugin(deepPopulate);

PostSchema.path('content').required(true, 'Post cannot be empty');
PostSchema.path('content')
	.validate(function (v) {
	  return v.length <= 10000;
	}, 'Post must be not be greater than 10000 chars');
var Post = mongoose.model('Post', PostSchema);