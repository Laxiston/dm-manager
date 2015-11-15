var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
  content: String,
  user_id: {type: Schema.Types.ObjectId, ref: "User"},
  post_id: {type: Schema.Types.ObjectId, ref: "Post"},
  created_at: {type: Date, default: Date.now}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
CommentSchema.plugin(deepPopulate);

CommentSchema.path('content').required(true, 'Comment cannot be empty');
CommentSchema.path('content')
	.validate(function (v) {
	  return v.length <= 10000;
	}, 'Comment must be not be greater than 10000 chars');
var Comment = mongoose.model('Comment', CommentSchema);