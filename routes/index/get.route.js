const express = require('express');
const router = express.Router();

const indexController = require('../../controllers/index.controller');
const { findDefinitions } = require('../../modules/dictionary/dictionary');

const getIndex = router.get('', (req, res, next) => {
	const word = req.query.word;
	const lang = req.query.lang || 'english';
	global.API_VERSION = (req.query.v && Number(req.query.v)) || 1;

	if (!word) {
		// return res.redirect(301, 'https://dictionaryapi.dev');
		return indexController.render(req, res);
	}

	return findDefinitions(word, lang, (error, definitions) => {
		if (error) {
			// return indexController.errorHandler(req, res, error);
			return res.send(JSON.stringify(error, null, 4));
		}

		res.header('Content-Type', 'application/json');
		res.header('Access-Control-Allow-Origin', '*');

		return res.send(JSON.stringify(definitions, null, 4));
	});
});

module.exports = getIndex;
