var express = require('express');
var router = express.Router();
const productsAPIController = require('../../controllers/api/productsController');

router.get('/totalProductos', productsAPIController.cantidadProductos);
router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.find);

module.exports = router;