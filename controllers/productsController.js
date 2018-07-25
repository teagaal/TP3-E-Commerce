const productsService = require('../services/productsService');
const loginService = require('../services/loginService');

let self = {};

self.products = function (req, res) {
  const product = productsService.getProducts()
  if (loginService.loggedIn == true) {
    return res.redirect('/agregar');
  } else {
    return res.render('index', {
      product: product
    })
  }
}

self.postLogin = function (req, res) {
  if (loginService.checkLogin(req.body) == true) {
    return res.json({
      data: true
    })
  } else {
    return res.json({
      data: false
    })
  }

}

module.exports = self;
