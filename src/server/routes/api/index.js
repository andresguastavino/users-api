const express = require('express');
const router = express.Router();
const allApiController = require('../../controllers/api/indexApiController');

router.get(
    '/',
    allApiController.list
);

module.exports = router;