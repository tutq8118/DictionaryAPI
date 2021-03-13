const fetchData = require('./fetchData');
const cleanBody = require('./cleanBody');

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

module.exports = giveBody;
