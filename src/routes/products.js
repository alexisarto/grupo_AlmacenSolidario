var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();
var path = require('path');
const upload = require('../middlewares/productsMulter');


/* GET products add. */
router.get('/agregar-producto', productsController.productAdd);
/* POST products store. */
router.post('/agregar-producto', upload.any(), productsController.productStore);

/* GET carrito*/
router.get('/carrito', productsController.carrito);

/* GET detalle producto*/
router.get('/detalleProducto', productsController.detalleProducto);

/* GET detalle producto*/
router.get('/almacen', productsController.almacen);

/* GET product edit */
router.get('/editar-producto/:id', productsController.productEdit);
/* POST product edit */
router.post('/editar-producto/:id', upload.any(), productsController.productUpdate);

/* GET product destroy */
router.get('/destroy/:id', productsController.destroy);

/* GET products list. */
router.get('/list', productsController.list);

module.exports = router;