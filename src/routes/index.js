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

router.get('/losPiletones', indexController.losPiletones);

router.get('/losNiniosPrimero', indexController.losNiniosPrimero);

router.get('/losBajitos', indexController.losBajitos);

router.get('/manosEnAccion', indexController.manosEnAccion);

module.exports = router;