const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewController');

router.use('/', newController.index);
router.use('/:slug', newController.show);

module.exports = router;
