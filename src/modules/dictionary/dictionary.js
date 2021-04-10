const cheerio = require('cheerio');

const translate = require('./components/googletranslate/index');

const generateId = require('../helpers/generateId');
const giveBody = require('../helpers/giveBody');

const phonetics = require('./components/cambridge/phonetics');
const irregularVerbs = require('./components/cambridge/irregularVerbs');
const { meanings } = require('./components/cambridge/meanings');
const idioms = require('./components/cambridge/idioms');
const phrasalVerbs = require('./components/cambridge/phrasalVerbs');

const meaningsGG = require('./components/googletranslate/meanings');

const { CAMBRIDGE_URL } = require('./env');

const langList = [
	'zh-cn',
	'zh-tw',
	'vi',
	'es',
	'de',
	'id',
	'hi',
	'ko',
	'ar',
	'en',
	'ja',
];
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

	if (!['english'].includes(language)) {
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

	const URL = `${CAMBRIDGE_URL}/dictionary/english/${word}`;

	return giveBody(URL, async (err, body) => {
		if (err) {
			return callback(err);
		}

		const translates = await translate(word, { from: 'en', to: language });
		const $ = cheerio.load(body);
		const $entryBody = $('.entry-body__el').first();
		const dictionaries = [];
		const translateData = {};

		if (!translates.raw[3]) {
			translateData._id = generateId(20);
			translateData.word = translates.raw[1][4][0];
			translateData.translate = translates.raw[1][0][0][5][0][0];
			translateData.phonetics = phonetics($, $entryBody);
			translateData.irregular_verbs = irregularVerbs($, $entryBody);
			translateData.meanings = meanings($, $entryBody);
			translateData.idioms = idioms($, $entryBody);
			translateData.phrasal_verbs = phrasalVerbs($, $entryBody);
			dictionaries.push(translateData);
		} else {
			if (!translates.raw[3][1]) {
				translateData._id = generateId(20);
				translateData.word = translates.raw[3][0];
				translateData.translate = translates.text;
				translateData.phonetics = phonetics($, $entryBody);
				translateData.irregular_verbs = irregularVerbs($, $entryBody);
				translateData.meanings = meanings($, $entryBody);
				translateData.idioms = idioms($, $entryBody);
				translateData.phrasal_verbs = phrasalVerbs($, $entryBody);

				dictionaries.push(translateData);
			} else {
				translates.raw[3][1][0].forEach((translateItem) => {
					translateData._id = generateId(20);
					translateData.word = translates.raw[3][0];
					translateData.type = translateItem[0];
					translateData.phonetics = phonetics($, $entryBody);
					translateData.irregular_verbs = irregularVerbs(
						$,
						$entryBody
					);
					translateData.translate = translates.text;
					translateData.meanings = meaningsGG(translateItem);
					translateData.idioms = idioms($, $entryBody);
					translateData.phrasal_verbs = phrasalVerbs($, $entryBody);

					dictionaries.push(translateData);
				});
			}
		}

		Object.keys(dictionaries).forEach((key) => {
			Array.isArray(dictionaries[key]) &&
				!dictionaries[key].length &&
				delete dictionaries[key];
		});

		return callback(null, dictionaries);
	});
};

const findDefinitions = (word, language, callback) => {
	if (language === 'en') {
		return findEnglishDefinitions(word, 'english', callback);
	}
	return findNonEnglishToDefinitions(word, language, callback);
};

module.exports = { findDefinitions };
