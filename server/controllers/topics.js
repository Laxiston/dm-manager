var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Category = mongoose.model('Category');
var User = mongoose.model('User');

module.exports = {
  all: function(req, res) {
    Topic.find()
      .deepPopulate(["user_id", "category_id", "posts"])
      .exec(function (err, result){
        if(err) {throw err;}
        else {
          res.json(result);
        }
      });
  },
  get_one: function(req, res){
    Topic.findOne({_id: req.params.id})
      .deepPopulate(["user_id", "category_id", "posts", "posts.user_id", "posts.comments.user_id"])
      .exec(function (err, result){
        if(err) {throw err;}
        else {
          res.json(result);
        }
      });
  },
  create: function(req, res) {
    new Topic(req.body).save(function (err, result){
      if(err){throw err;}
      else {
        User.findByIdAndUpdate(result.user_id, {$push: {topics: result._id}}, function (err, result){
          if(err){throw err;}
        });
        Category.findByIdAndUpdate(result.category_id, {$push: {topics: result._id}}, function (err, result){
          if(err){throw err;}
        });
        res.send("Topic added");
      }
    });
  }
};