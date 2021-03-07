const axios = require('axios');
const cheerio = require('cheerio');
const jsdom = require('jsdom');

const cleanBody = () => {
	const { JSDOM } = jsdom;

	let c = '',
		d = 0,
		e = 0,
		arr = [];

	body = body.split('\n');
	body.shift();
	body = body.join('\n');

	for (c = c ? c : c + body; c; ) {
		d = 1 + c.indexOf(';');

		if (!d) {
			break;
		}

		e = d + parseInt(c, 16);

		arr.push(c.substring(d, e));

		c = c.substring(e);
		d = 0;
	}

	arr = arr.filter((e) => e.indexOf('[') !== 0);

	arr[1] = '<script>';
	arr[arr.length] = '</script>';

	return new JSDOM(arr.join(''), { runScripts: 'dangerously' }).serialize();
};

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
	const URL = `https://dictionary.cambridge.org/dictionary/${language}/${word}`;

	return giveBody(URL, (err, body) => {
		if (err) {
			return callback(err);
		}
		const $ = cheerio.load(body);
		const $entryBody = $('.entry-body').first();

		if (!$entryBody.find('h2.di-title').first()[0]) {
			return callback({
				statusCode: 404,
				title: 'Word not found',
				message:
					"Sorry pal, we couldn't find definitions for the word you were looking for.",
				resolution:
					'You can try the search again or head to the web instead.',
			});
		}
	});
};

const findDefinitions = (word, language, callback) => {
	return findEnglishDefinitions(word, language, callback);
};

module.exports = { findDefinitions };
