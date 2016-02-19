var users = require('../controllers/users.js');
var adventures = require('../controllers/adventures.js');

module.exports = function (app, passport) {
  app.post('/login',
    function (req, res) {
      users.login(req, res);
    });
  app.get('/users/:id', 
    function (req, res){
      users.get_one(req, res);
    });
  app.post("/add/user", 
    function (req, res){
      users.create(req, res);
    });

  app.get('/adventures', 
    function (req, res){
      adventures.all(req, res);
    });

  app.post('/adventures', 
    function (req, res){
      adventures.create(req, res);
    });

  app.delete('/adventures/:id',
    function (req, res){
      adventures.destroy(req, res);
    });

  app.post('/adventures/:id/leave',
    function (req, res){
      adventures.leave(req, res);
    });
};