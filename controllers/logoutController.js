const loginService = require('../services/loginService');

let self = {};

self.logout = function (req, res) {
  loginService.loggedIn = false;
  return res.sendStatus(200);
}

module.exports = self;