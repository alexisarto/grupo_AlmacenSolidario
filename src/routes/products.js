var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();
var path = require('path');
const upload = require('../middlewares/productsMulter');
var adminMiddleware = require('../middlewares/adminMiddleware');
const validations = require('../middlewares/validations');

/* GET products add. */
router.get('/agregar-producto', productsController.productAdd);
/* POST products store. */
router.post('/agregar-producto', upload.any(), validations.productAddForm, productsController.productStore);

/* GET detalle producto*/
router.get('/detalleProducto/:id', productsController.detalleProducto);

/* GET todos los productos*/
router.get('/almacen', productsController.almacen);
router.get('/almacen/:categoria_id', productsController.filtroCategoria);
router.get('/almacen/:categoria_id/:sub_categoria_id?', productsController.filtroSubCategoria);


/* GET product edit */
router.get('/editar-producto/:id', productsController.productEdit);
router.get('/editar-producto/:id/image', productsController.productEditImage);
/* POST product edit */
router.post('/editar-producto/:id', upload.any(), productsController.productUpdate);
router.post('/editar-producto/:id/image', upload.any(), productsController.productUpdateImage);

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