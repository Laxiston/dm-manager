var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = {
  create: function(req, res) {
    new Comment(req.body).save(function (err, result){
      if(err){throw err;}
      else {
        User.findByIdAndUpdate(result.user_id, {$push: {comments: result._id}}, function (err, result){
          if(err){throw err;}
        });
        Post.findByIdAndUpdate(result.post_id, {$push: {comments: result._id}}, function (err, result){
          if(err){throw err;}
        });
        res.json(result);
      }
    });
  }
};