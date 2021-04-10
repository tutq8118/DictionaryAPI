// Fork @vitalets/google-translate-api
const querystring = require('querystring');
const got = require('got');

const tokenGenerator = require('./tokenGenerator');
const languages = require('./languages');

function extract(key, res) {
	const re = new RegExp(`"${key}":".*?"`);
	const result = re.exec(res.body);
	if (result !== null) {
		return result[0].replace(`"${key}":"`, '').slice(0, -1);
	}
	return '';
}

function translate(text, opts, gotopts, callback) {
	opts = opts || {};
	gotopts = gotopts || {};
	var e;
	[opts.from, opts.to].forEach(function (lang) {
		if (lang && !languages.isSupported(lang)) {
			e = new Error();
			e.code = 400;
			e.message = "The language '" + lang + "' is not supported";
			callback(e)
		}
	});
	if (e) {
		return new Promise(function (resolve, reject) {
			reject(e);
		});
	}

	opts.from = opts.from || 'auto';
	opts.to = opts.to || 'en';
	opts.tld = opts.tld || 'com';

	opts.from = languages.getCode(opts.from);
	opts.to = languages.getCode(opts.to);

	let url = 'https://translate.google.' + opts.tld;
	return got(url, gotopts)
		.then(function (res) {
			const token = tokenGenerator.generate(text);
			const data = {
				rpcids: 'MkEWBc',
				'f.sid': extract('FdrFJe', res),
				bl: extract('cfb2h', res),
				hl: opts.to,
				'soc-app': 1,
				'soc-platform': 1,
				'soc-device': 1,
				_reqid: Math.floor(1000 + Math.random() * 9000),
				rt: 'c',
				[token.name]: token.value,
			};

			return data;
		})
		.then(function (data) {
			url =
				url +
				'/_/TranslateWebserverUi/data/batchexecute?' +
				querystring.stringify(data);
			gotopts.body =
				'f.req=' +
				encodeURIComponent(
					JSON.stringify([
						[
							[
								'MkEWBc',
								JSON.stringify([
									[text, opts.from, opts.to, true],
									[null],
								]),
								null,
								'generic',
							],
						],
					])
				) +
				'&';
			gotopts.headers['content-type'] =
				'application/x-www-form-urlencoded;charset=UTF-8';

			return got
				.post(url, gotopts)
				.then(function (res) {
					let json = res.body.slice(6);
					let length = '';

					let result = {
						text: '',
						pronunciation: '',
						from: {
							language: {
								didYouMean: false,
								iso: '',
							},
							text: {
								autoCorrected: false,
								value: '',
								didYouMean: false,
							},
						},
						raw: '',
					};

					try {
						length = /^\d+/.exec(json)[0];
						json = JSON.parse(
							json.slice(
								length.length,
								parseInt(length, 10) + length.length
							)
						);
						json = JSON.parse(json[0][2]);
						result.raw = json;
					} catch (e) {
						return result;
					}

					if (
						json[1][0][0][5] === undefined ||
						json[1][0][0][5] === null
					) {
						// translation not found, could be a hyperlink or gender-specific translation?
						result.text = json[1][0][0][0];
					} else {
						json[1][0][0][5].forEach(function (obj) {
							if (obj[0]) {
								result.text += obj[0];
							}
						});
					}
					result.pronunciation = json[1][0][0][1];

					// From language
					if (json[0] && json[0][1] && json[0][1][1]) {
						result.from.language.didYouMean = true;
						result.from.language.iso = json[0][1][1][0];
					} else if (json[1][3] === 'auto') {
						result.from.language.iso = json[2];
					} else {
						result.from.language.iso = json[1][3];
					}

					// Did you mean & autocorrect
					if (json[0] && json[0][1] && json[0][1][0]) {
						let str = json[0][1][0][0][1];

						str = str.replace(/<b>(<i>)?/g, '[');
						str = str.replace(/(<\/i>)?<\/b>/g, ']');

						result.from.text.value = str;

						if (json[0][1][0][2] === 1) {
							result.from.text.autoCorrected = true;
						} else {
							result.from.text.didYouMean = true;
						}
					}
					return result;
				})
				.catch(function (err) {
					err.message += `\nUrl: ${url}`;
					if (
						err.statusCode !== undefined &&
						err.statusCode !== 200
					) {
						err.code = 'BAD_REQUEST';
					} else {
						err.code = 'BAD_NETWORK';
					}
					throw err;
				});
		});
}

module.exports = translate;
module.exports.languages = languages;
