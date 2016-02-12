var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var RaceSchema = new mongoose.Schema({
  name: String,
  description: String,
});

RaceSchema.plugin(deepPopulate);

mongoose.model('Race', RaceSchema);