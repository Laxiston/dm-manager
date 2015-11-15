var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
  get_one: function(req, res) {
    User.findOne({_id: req.params.id})
      .deepPopulate(["topics", "posts", "comments"])
      .exec(function (err, result){
        if(err) {throw err;}
        else {
          res.json(result);
        }
      });
  },
  login: function(req, res) {
    User.findOne({name: req.body.name}, function (err, result){
      if (result) {
        if (req.body.password === result.password) {
          res.json(result);
        }
        else res.send("Incorrect password.")
      }
      else res.send("User doesn't exist.");
    });
  },
  create: function(req, res) {
    User.findOne({name: req.body.name}, function (err, result){
      if (!result) {
        new User(req.body).save(function (err, result) {
          res.json(result);
        });
      }
      else res.send("User already exists.");
    });
  }
};