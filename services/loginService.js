let self = {};

const userLogin = {
  user: 'admin',
  pass: 'admin'
}

self.loggedIn = false;

self.checkLogin = function (data) {
  if (data.user == userLogin.user && data.pass == userLogin.pass) {
    self.loggedIn = true;
    return true;
  } else {
    self.loggedIn = false;
    return false;
  }
}

module.exports = self;
