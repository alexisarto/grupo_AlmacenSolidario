var express = require('express');
var router = express.Router();
const usersAPIController = require('../../controllers/api/usersController');

router.get('/totalUsuarios', usersAPIController.cantidadUsuarios);
router.get('/', usersAPIController.list);
router.get('/:id', usersAPIController.find);

module.exports = router;