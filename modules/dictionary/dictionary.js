const cheerio = require('cheerio');
const axios = require('axios');

const translate = require('./components/googletranslate/index');

const generateId = require('../helpers/generateId');
const giveBody = require('../helpers/giveBody');

const phonetics = require('./components/cambridge/phonetics');
const irregularVerbs = require('./components/cambridge/irregularVerbs');
const { meanings } = require('./components/cambridge/meanings');
const idioms = require('./components/cambridge/idioms');
const phrasalVerbs = require('./components/cambridge/phrasalVerbs');

const { CAMBRIDGE_URL, LABAN_URL } = require('./env');

const langList = ['english', 'english-vietnamese', 'english-french'];
const langError = {
	statusCode: 500,
	title: 'Word not found',
	message:
		"Sorry pal, we couldn't find language for the word you were looking for.",
	resolution: 'You can try the search again or head to the web instead.',
};
const wordError = {
	statusCode: 404,
	title: 'Word not found',
	message:
		"Sorry pal, we couldn't find definitions for the word you were looking for.",
	resolution: 'You can try the search again or head to the web instead.',
};

const findEnglishDefinitions = (word, language, callback) => {
	if (encodeURIComponent(word).includes('%20%20')) {
		return callback(wordError);
	}

	if (!langList.includes(language)) {
		return callback(langError);
	}

	const URL = `${CAMBRIDGE_URL}/dictionary/${language}/${word}`;

	return giveBody(URL, (err, body) => {
		if (err) {
			return callback(err);
		}
		const $ = cheerio.load(body);
		const $entryBody = $('.entry-body__el');

		if ($entryBody.length < 1 && !$('h2.di-title').first()[0]) {
			return callback(wordError);
		}

		const dictionaries = [];
		$entryBody.each((index, entry) => {
			const entryData = {};
			const $entry = $(entry);

			entryData._id = generateId(20);
			entryData.word = $entry.find('.di-title').first().text();
			entryData.type = $entry.find('.posgram .pos').first().text();
			entryData.phonetics = phonetics($, $entry);
			entryData.irregular_verbs = irregularVerbs($, $entry);
			entryData.meanings = meanings($, $entry);
			entryData.idioms = idioms($, $entry);
			entryData.phrasal_verbs = phrasalVerbs($, $entry);

			dictionaries.push(entryData);
		});

		Object.keys(dictionaries).forEach((key) => {
			Array.isArray(dictionaries[key]) &&
				!dictionaries[key].length &&
				delete dictionaries[key];
		});

		return callback(null, dictionaries);
	});
};

const findNonEnglishToDefinitions = async (word, language, callback) => {
	if (encodeURIComponent(word).includes('%20%20')) {
		return callback(wordError);
	}

	if (!langList.includes(language)) {
		return callback(langError);
	}

	try {
		const URL = `${CAMBRIDGE_URL}/dictionary/${language}/${word}`;

		const phoneticUK = await axios(
			`${LABAN_URL}/ajax/getsound?accent=uk&word=${word}`
		);
		const phoneticUS = await axios(
			`${LABAN_URL}/ajax/getsound?accent=us&word=${word}`
		);

		return await giveBody(URL, (err, body) => {
			if (err) {
				return callback(err);
			}

			const $ = cheerio.load(body);
			const $entryBody = $('.entry-body .link.dlink');

			if ($entryBody.length < 1 && !$('h2.di-title').first()[0]) {
				return callback(wordError);
			}

			const dictionaries = [];
			$entryBody.each((index, entry) => {
				const entryData = {};
				const $entry = $(entry);
				const nonPhonetics = [
					{
						type: 'uk',
						text: $entry.find('.pron.dpron').first().text(),
						audio: phoneticUK.data.data,
					},
					{
						type: 'us',
						text: $entry.find('.pron.dpron').first().text(),
						audio: phoneticUS.data.data,
					},
				];

				entryData._id = generateId(20);
				entryData.word = $entry.find('.di-title').first().text();
				entryData.type = $entry.find('.posgram .pos').first().text();
				entryData.phonetics = nonPhonetics;
				entryData.irregular_verbs = irregularVerbs($, $entry);
				entryData.meanings = meanings($, $entry);
				entryData.idioms = idioms($, $entry);
				entryData.phrasal_verbs = phrasalVerbs($, $entry);

				dictionaries.push(entryData);
			});

			Object.keys(dictionaries).forEach((key) => {
				Array.isArray(dictionaries[key]) &&
					!dictionaries[key].length &&
					delete dictionaries[key];
			});

			return callback(null, dictionaries);
		});
	} catch (error) {
		console.log(error);
		return callback(langError);
	}
};

const findDefinitions = (word, language, callback) => {
	if (language === 'english') {
		return findEnglishDefinitions(word, language, callback);
	}
	return findNonEnglishToDefinitions(word, language, callback);
};

module.exports = { findDefinitions };
