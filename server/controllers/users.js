var mongoose = require('mongoose'),
    User     = mongoose.model('User'),
    _        = require('lodash'),
    jwt      = require('jsonwebtoken');

function createToken (user) {
  return jwt.sign(_.omit(user, ['password', 'confirm_password']), "unicorngiraffepineapplepepper", { expiresIn: 60*60*24*31*3 }); //expires in 3 months
}

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
    if (!req.body.username || !req.body.password) {
      res.status(400).send("Please enter your username or email and password.");
    }

    User.findOne({username: req.body.username}, function (err, result) {
      if (result) {
        if (req.body.password === result.password) {
          var user = _.pick(result, '_id', 'username');
          res.status(201).send({ id_token: createToken(user) });
        }
        else res.status(401).send("Username or password don't match.")
      }
      else res.status(401).send("Username or password don't match.");
    });
  },
  create: function(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirm_password) {
      res.status(400).send("Please enter a username, email, password, and password confirmation.");
    }
    if (req.body.password != req.body.confirm_password) {
      res.status(400).send("Password and password confirmation don't match.");
    }
    
    User.find({$or: [{username: req.body.username}, {email: req.body.email}]}, function (err, result){
      if (result.length === 0) {
        var user = _.pick(req.body, 'username', 'email', 'password');

        new User(user).save(function (err, result) {
          res.status(201).send({ id_token: createToken(_.pick(result, "_id", "username")) });
        });
      }
      else res.status(401).send("User with that username or email already exists.");
    });
  }
};