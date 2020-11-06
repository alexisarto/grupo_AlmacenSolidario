var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET products listing. */
router.get('/agregar-producto', productsController.productAdd);

module.exports = router;