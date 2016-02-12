var mongoose  = require('mongoose'),
    User      = mongoose.model('User'),
    bcrypt    = require("bcryptjs"),
    _         = require('lodash'),
    jwt       = require('jsonwebtoken');

function createToken (user) {
  return jwt.sign(_.pick(user, '_id', 'username'), "unicorngiraffepineapplepepper", { expiresIn: 60*60*24*31*3 }); //expires in 3 months
}

module.exports = {
  get_one: function (req, res) {
    User.findOne({_id: req.params.id})
      .deepPopulate(["topics", "posts", "comments"])
      .exec(function (err, result){
        if(err) {throw err;}
        else {
          res.json(result);
        }
      });
  },
  login: function (req, res) {
    if (!req.body.username || !req.body.password) { res.status(400).send("Please enter your username and password."); }
    else {
      User.findOne({ username: req.body.username }, function(err, result) {
        if (result) {
          bcrypt.compare(req.body.password, result.password, function(err, verified) {
            if (err) {res.status(400).send("Username or password don't match.");}
            else if (verified) {
              var user = _.pick(result, '_id', "username");
              res.status(200).send({ id_token: createToken(user) });
            }
            else res.status(400).send("Username or password don't match.");
          });
        }
        else res.status(400).send("Username or password don't match.");
      });
    }
  },
  create: function (req, res) {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirm_password) {
      res.status(400).send("Please enter a username, email, password, and password confirmation.");
    }
    else if (req.body.password != req.body.confirm_password) {
      res.status(400).send("Password and password confirmation don't match.");
    }
    else {
      User.find({$or: [{username: req.body.username}, {email: req.body.email}]}, function (err, result) {
        if (result.length === 0) {
          bcrypt.hash(req.body.password, 10, function(err, hash) {
            if (err) { res.status(500).send("Couldn't save password properly."); }
            else {
              var user = _.pick(req.body, 'username', 'email');
              user.password = hash;
              new User(user).save(function (err, result) {
                if (err) { res.status(500).send("Couldn't save user."); }
                else {
                  var user = _.pick(result, "_id", "username");
                  res.status(200).send({ id_token: createToken(user) });
                }
              });
            }
          });
        }
        else res.status(400).send("User with that username or email already exists.");
      });
    }
  }
};