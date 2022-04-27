const express = require('express');
const weatherController = require('./weather.controller')
const router = express.Router();

router.get('/weather-forecast', weatherController);

module.exports = router;
