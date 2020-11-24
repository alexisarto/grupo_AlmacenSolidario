var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();
var path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/imagenes_productos')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

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

/* GET products edit. */
router.get('/editar-producto/:id', productsController.productEdit);
/* POST products edit. */
router.post('/editar-producto/:id', upload.any(), productsController.productUpdate);

/* GET products list. */
router.get('/list', productsController.list);

module.exports = router;