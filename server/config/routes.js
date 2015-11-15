//var auth = require('connect-ensure-login');

var categories = require('../controllers/categories.js');
var comments = require('../controllers/comments.js');
var posts = require('../controllers/posts.js');
var topics = require('../controllers/topics.js');
var users = require('../controllers/users.js');

module.exports = function (app, passport) {
  // app.get('/',
  //   function (req, res) {
  //     res.render('home', { user: req.user });
  //   });
  // app.get('/login',
  //   function (req, res){
  //     res.render('login');
  //   });
  // app.get('/logout',
  //   auth.ensureLoggedIn(),
  //   function (req, res){
  //     req.logout();
  //     res.redirect('/');
  //   });
  // app.get('/profile',
  //   auth.ensureLoggedIn(),
  //   function (req, res){
  //     res.render('profile', { user: req.user });
  //   });

  app.post('/login',
    // passport.authenticate('local'),
    function (req, res) {
      users.login(req, res);
    });
  app.get('/categories',
    // auth.ensureLoggedIn('/'),
    function (req, res){
      categories.all(req, res);
    });
  app.get('/topics', 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      topics.all(req, res);
    });
  app.get('/topics/:id', 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      topics.get_one(req, res);
    });
  app.get('/users/:id', 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      users.get_one(req, res);
    });
  app.post("/add/comment", 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      comments.create(req, res);
    });
  app.post("/add/post", 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      posts.create(req, res);
    });
  app.post("/add/user", 
    // auth.ensureLoggedOut('/'),
    function (req, res){
      users.create(req, res);
    });
  app.post("/add/topic", 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      topics.create(req, res);
    });
  app.post("/upvote/post/:id", 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      posts.upvote(req, res);
    });
  app.post("/downvote/post/:id", 
    // auth.ensureLoggedIn('/'),
    function (req, res){
      posts.downvote(req, res);
    });
};