var express = require('express');
var router = express.Router();
const salesAPIController = require('../../controllers/api/salesController');

router.get('/cantidadDeDonacionesPorInstitucion', salesAPIController.cantidadDonacionesPorInstitucion);
router.get('/totalVentas', salesAPIController.cantidadVentas);
router.get('/ultimaVenta', salesAPIController.ultimaVenta);
router.get('/ventaMasCara', salesAPIController.ventaMasCara);
router.get('/', salesAPIController.list);
router.get('/:id', salesAPIController.find);


module.exports = router;