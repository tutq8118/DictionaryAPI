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

module.exports = cleanBody;
