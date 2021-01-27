var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', indexController.home);

router.get('/instituciones', indexController.instituciones);

router.get('/nosotros', indexController.aboutUs);

module.exports = router;