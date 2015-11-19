var users = require('../controllers/users.js');

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
};