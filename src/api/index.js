const express = require('express');
const polycoords = require('./routes/polycoords');

const apiRouter = express.Router();

apiRouter.use('/polycoords', polycoords);

module.exports = apiRouter;