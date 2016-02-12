var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ClassSchema = new mongoose.Schema({
  name: String,
  description: String,
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
ClassSchema.plugin(deepPopulate);

mongoose.model('Class', ClassSchema);