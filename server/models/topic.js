var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
  title: String,
  description: String,
  user_id: {type: Schema.Types.ObjectId, ref: "User"},
  category_id: {type: Schema.Types.ObjectId, ref: "Category"},
  posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
  created_at: {type: Date, default: Date.now}
});
TopicSchema.path('title').required(true, 'Title cannot be empty');
TopicSchema.path('title')
	.validate(function (v) {
	  return v.length <= 90;
	}, 'Title must not be greater than 90 chars');
TopicSchema.path('description').required(true, 'Description cannot be empty');
TopicSchema.path('description')
	.validate(function (v) {
	  return v.length <= 10000;
	}, 'Description must not be greater than 10000 chars');

var deepPopulate = require('mongoose-deep-populate')(mongoose);
TopicSchema.plugin(deepPopulate);

var Topic = mongoose.model('Topic', TopicSchema);