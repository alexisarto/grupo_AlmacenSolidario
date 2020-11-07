var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET products add. */
router.get('/agregar-producto', productsController.productAdd);
/* POST products store. */
router.post('/agregar-producto', productsController.productStore);


/* GET products edit. */
router.get('/editar-producto/:id', productsController.productEdit);
/* POST products edit. */
router.post('/editar-producto/:id', productsController.productUpdate);

/* GET products list. */
//router.get('/list', productsController.list);

module.exports = router;