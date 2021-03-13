const cheerio = require('cheerio');

const generateId = require('../helpers/generateId');
const giveBody = require('../helpers/giveBody');

const phonetics = require('./components/phonetics');
const irregularVerbs = require('./components/irregularVerbs');
const meanings = require('./components/meanings');
const idioms = require('./components/idioms');
const phrasalVerbs = require('./components/phrasalVerbs');

const { BASE_URL } = require('./env');

const findEnglishDefinitions = (word, language, callback) => {
	if (encodeURIComponent(word).includes('%20%20')) {
		return callback({
			statusCode: 404,
			title: 'Word not found',
			message:
				"Sorry pal, we couldn't find definitions for the word you were looking for.",
			resolution:
				'You can try the search again or head to the web instead.',
		});
	}
	const URL = `${BASE_URL}/dictionary/${language}/${word}`;

	return giveBody(URL, (err, body) => {
		if (err) {
			return callback(err);
		}
		const $ = cheerio.load(body);
		const $entryBody = $('.entry-body__el');

		if ($entryBody.length < 1 && !$('h2.di-title').first()[0]) {
			return callback({
				statusCode: 404,
				title: 'Word not found',
				message:
					"Sorry pal, we couldn't find definitions for the word you were looking for.",
				resolution:
					'You can try the search again or head to the web instead.',
			});
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

const findDefinitions = (word, language, callback) => {
	return findEnglishDefinitions(word, language, callback);
};

module.exports = { findDefinitions };
