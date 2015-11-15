var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = {
  create: function(req, res) {
    new Post(req.body).save(function (err, result){
      if(err){throw err;}
      else {
        User.findByIdAndUpdate(result.user_id, {$push: {posts: result._id}}, function (err, result){
          if(err){throw err;}
        });
        Topic.findByIdAndUpdate(result.topic_id, {$push: {posts: result._id}}, function (err, result){
          if(err){throw err;}
        });
        res.send("Post added");
      }
    });
  },
  upvote: function(req, res) {
    Post.findByIdAndUpdate(req.params.id, {$inc: {rating: 1}}, function (err, result){
      if(err){throw err;}
      else res.send("Upvoted");
    });
  },
  downvote: function(req, res) {
    Post.findByIdAndUpdate(req.params.id, {$inc: {rating: -1}}, function (err, result){
      if(err){throw err;}
      else res.send("Downvoted");
    });
  }
};