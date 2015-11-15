var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CategorySchema = new mongoose.Schema({
  name: String,
  topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
  created_at: {type: Date, default: Date.now}
});
var deepPopulate = require('mongoose-deep-populate')(mongoose);
CategorySchema.plugin(deepPopulate);

CategorySchema.path('name').required(true, 'Name cannot be empty');
var Category = mongoose.model('Category', CategorySchema);