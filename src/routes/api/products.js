var express = require('express');
var router = express.Router();
const productsAPIController = require('../../controllers/api/productsController');

router.get('/categorias', productsAPIController.categorias);
router.get('/totalProductos', productsAPIController.cantidadProductos);
router.get('/ultimoProductoInsertado', productsAPIController.last);
router.get('/', productsAPIController.list);
router.get('/:id', productsAPIController.find);


module.exports = router;