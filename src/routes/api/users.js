var express = require('express');
var router = express.Router();
const usersAPIController = require('../../controllers/api/usersController');

/* GET users list. */
router.get('/', usersAPIController.list);

router.get('/:id', usersAPIController.find);

module.exports = router;