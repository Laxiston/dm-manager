var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AdventureSchema = new mongoose.Schema({
  title: String,
  dm_id: {type: Schema.Types.ObjectId, ref: "User"},
  players: [{type: Schema.Types.ObjectId, ref: "Character"}],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
AdventureSchema.plugin(deepPopulate);

AdventureSchema.path('title').required(true, 'Title cannot be empty');
AdventureSchema.path('title')
	.validate(function (v) {
	  return v.length <= 45;
	}, 'Title must be shorter than 45 chars');

mongoose.model('Adventure', AdventureSchema);