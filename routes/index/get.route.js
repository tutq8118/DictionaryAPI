const express = require('express');
const router = express.Router();

const indexController = require('../../controllers/index.controller');

const getIndex = router.get('', (req, res, next) => {
	indexController.render(req, res);
});

module.exports = getIndex;
