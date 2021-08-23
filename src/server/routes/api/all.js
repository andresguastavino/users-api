const express = require('express');
const router = express.Router();
const allApiController = require('../../controllers/api/allApiController');

router.get(
    '/',
    allApiController.list
);

module.exports = router;