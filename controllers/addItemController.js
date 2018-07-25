const productsService = require('../services/productsService');
const loginService = require('../services/loginService');

let self = {};

//Mostrar página para subir productos si estás loggeada
self.getAdd = function (req, res) {
  if (loginService.loggedIn == true) {
    return res.render('agregar', { user: 'admin' })
  } else {
    return res.redirect('/')
  }
}

//Mandar la info del producto
self.upload = function (req, res) {
  const body = req.body;
  if (req.body.url && req.body.product && req.body.price != '') {
    productsService.addProducts(body)
  } else {
    return res.sendStatus(400)
  }
  return res.json()
}

module.exports = self;