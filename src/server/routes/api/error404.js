const express = require('express');
const router = express.Router();
const error404ApiController = require('../../controllers/api/error404ApiController');

router.get(
    '/',
    error404ApiController.get
);

module.exports = router;