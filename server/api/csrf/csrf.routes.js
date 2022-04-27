const express = require('express');
const csrfController = require('./csrf.controller')
const router = express.Router();

router.get('/csrf', csrfController)

module.exports = router;
