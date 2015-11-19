var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CharacterSchema = new mongoose.Schema({
  user_id: {type: Schema.Types.ObjectId, ref: "User"},
  adventure_id: {type: Schema.Types.ObjectId, ref: "Adventure"},
  name: String,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
CharacterSchema.plugin(deepPopulate);

CharacterSchema.path('name').required(true, 'Name cannot be empty');
CharacterSchema.path('name')
	.validate(function (v) {
	  return v.length <= 45;
	}, 'Name must be shorter than 45 chars');

mongoose.model('Character', CharacterSchema);