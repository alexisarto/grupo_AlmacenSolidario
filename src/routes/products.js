var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();
var path = require('path');
const upload = require('../middlewares/productsMulter');
var adminMiddleware = require('../middlewares/adminMiddleware');

/* GET products add. */
router.get('/agregar-producto', productsController.productAdd);
/* POST products store. */
router.post('/agregar-producto', upload.any(), productsController.productStore);

/* GET detalle producto*/
router.get('/detalleProducto/:id', productsController.detalleProducto);

/* GET detalle producto*/
router.get('/almacen', productsController.almacen);

/* GET product edit */
router.get('/editar-producto/:id', productsController.productEdit);
/* POST product edit */
router.post('/editar-producto/:id', upload.any(), productsController.productUpdate);

/* GET product destroy */
router.post('/destroy/:id', productsController.destroy);

/* GET products list. */
router.get('/list', adminMiddleware, productsController.list);

/* Products agregar marca, unidad, categoria y subcategoria*/
router.get('/agregarmarca', productsController.brandAdd);
router.post('/agregarmarca', productsController.brandStore);
router.post('/agregarunidad', productsController.unidadStore);
router.post('/agregarcategoria', productsController.categoryStore);
router.post('/agregarsubcategoria', productsController.subCategoryStore);

module.exports = router;