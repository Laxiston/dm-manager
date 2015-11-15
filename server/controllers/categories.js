var mongoose = require('mongoose');
var Category = mongoose.model('Category');

module.exports = {
  all: function(req, res) {
    Category.find({}, function (err, result){
      if(err){throw err;}
      else res.json(result);
    });
  }
};