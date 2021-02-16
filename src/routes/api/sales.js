var express = require('express');
var router = express.Router();
const salesAPIController = require('../../controllers/api/salesController');

/* GET sales list. */
router.get('/', salesAPIController.list);

router.get('/:id', salesAPIController.find);

module.exports = router;