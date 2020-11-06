var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/agregar-producto', function(req, res, next) {
    res.render('productAdd');
  });

module.exports = router;