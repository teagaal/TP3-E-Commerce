const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const addItemController = require('../controllers/addItemController');
const logoutController = require('../controllers/logoutController');


//Página de inicio
router.get('/', productsController.products);

//Manejar login
router.post('/', productsController.postLogin);

//Página para agregar productos
router.get('/agregar', addItemController.getAdd);

//Subir productos nuevos
router.post('/agregar', addItemController.upload);

//Cerrar sesión
router.put('/logout', logoutController.logout)

module.exports = router;
