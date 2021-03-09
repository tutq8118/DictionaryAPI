const axios = require('axios');
const cheerio = require('cheerio');
const { cleanBody } = require('../helpers/cleanBody');
const generateId = require('../helpers/generateId');

const fetchData = async (url, callback) => {
	try {
		const response = await axios(url, { timeout: 10000 });
		return callback(null, response.data);
	} catch (error) {
		console.log(error);
	}
};

const giveBody = (url, options, callback) => {
	!callback && (callback = options) && (options = {});

	return fetchData(url, (err, body) => {
		if (err) {
			return callback(err);
		}

		try {
			options.cleanBody && (body = cleanBody(body));
		} catch (error) {
			return callback({
				statusCode: 500,
				title: 'Something Went Wrong.',
				message: 'Sorry pal, Our servers ran into some problem.',
				resolution:
					'You can try the search again or head to the web instead.',
			});
		}
		return callback(null, body);
	});
};

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
	const baseURL = 'https://dictionary.cambridge.org';
	const URL = `${baseURL}/dictionary/${language}/${word}`;

	const getPhonetics = ($, $container) => {
		const $phonetics = $container
			.find('.dpron-i')
			.not('.irreg-infls .dpron-i')
			.not('.drunon .dpron-i');

		if ($phonetics.length < 1) {
			return [];
		}

		return $phonetics
			.map((index, phonetic) => ({
				_id: generateId(5),
				type: $(phonetic).find('.region').text(),
				text: $(phonetic).find('.pron.dpron').text(),
				audio:
					baseURL +
					$(phonetic)
						.find('.daud amp-audio source[type="audio/mpeg"]')
						.attr('src'),
			}))
			.get();
	};

	const getIrregularVerbs = ($, $container) => {
		const $irregularVerbs = $container.find('.irreg-infls .inf-group');

		if ($irregularVerbs.length < 1) {
			return [];
		}

		return $irregularVerbs
			.map((index, verb) => ({
				_id: generateId(5),
				prefix: $(verb).find('.lab.dlab').text(),
				text: $(verb).find('.inf.dinf').text(),
			}))
			.get();
	};

	const getMeanings = ($, $container) => {};

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
			entryData.phonetics = getPhonetics($, $entry);
			entryData.irregularVerbs = getIrregularVerbs($, $entry);
			entryData.meanings = getMeanings($, $entry);

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
