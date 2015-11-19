var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  adventures: [{type: Schema.Types.ObjectId, ref: "Adventure"}],
  characters: [{type: Schema.Types.ObjectId, ref: "Character"}],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
UserSchema.plugin(deepPopulate);

UserSchema.path('username').required(true, 'Name cannot be empty');
UserSchema.path('username')
	.validate(function (v) {
	  return v.length <= 45;
	}, 'Name must be shorter than 45 chars');
UserSchema.path('password').required(true, 'Name cannot be empty');
UserSchema.path('password')
  .validate(function (v) {
    return v.length <= 45;
  }, 'Name must be shorter than 45 chars');
UserSchema.path('email').required(true, 'Name cannot be empty');
UserSchema.path('email')
  .validate(function (v) {
    return v.length <= 45;
  }, 'Name must be shorter than 45 chars');

mongoose.model('User', UserSchema);