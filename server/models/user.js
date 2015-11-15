var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
  posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  created_at: {type: Date, default: Date.now}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
UserSchema.plugin(deepPopulate);

UserSchema.path('name').required(true, 'Name cannot be empty');
var User = mongoose.model('User', UserSchema);
