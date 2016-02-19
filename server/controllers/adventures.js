var mongoose = require('mongoose');
var Adventure = mongoose.model('Adventure');
var User = mongoose.model('User');
mongoose.Promise = require('q').Promise;


var exports = {
  all: all,
  create: create,
  destroy: destroy,
  leave: leave,
  get_one: get_one
};

function all(req, res) {
  Adventure.find()
    .deepPopulate(["players", "players._id"])
    .exec() // Mongoose queries are not promises until exec()'d
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(fail);
}

function create(req, res) {
  new Adventure(req.body)
    .save()
    .then(function (result) {
      User.findByIdAndUpdate(
        result.dm_id,
        { $push: { adventures: result._id }}
      )
        .exec()
        .catch(fail); // FIXME: nested promises :(
      res.status(200).send(result);
    })
    .catch(fail);
}

function destroy(req, res) {
  Adventure.findByIdAndRemove(req.params.id)
    .then(function (result) {
      User.findByIdAndUpdate(
        result.dm_id,
        { $pull: { adventures: result._id }}
      )
        .exec()
        .catch(fail); // FIXME: nested promises :(
      res.status(200).send(result);
    })
    .catch(fail); 
}

function leave(req, res) {
  User.findByIdAndUpdate(
    req.body.user_id,
    { $pull: { adventures: req.params.id }}
  )
    .exec()
    .then(function (result) {
      res.status(200).send(result);
    })
    .catch(fail); // FIXME: nested promises :(
}

function get_one(req, res) {
  Adventure.findOne({_id: req.params.id})
    .deepPopulate(["user_id", "category_id", "posts", "posts.user_id", "posts.comments.user_id"])
    .exec(function (err, result){
      if(err) {throw err;}
      else {
        res.json(result);
      }
    });
}

function fail(err) {
  throw err;
}

module.exports = exports;