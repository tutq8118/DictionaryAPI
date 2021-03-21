const axios = require('axios');

const fetchData = async (url, callback) => {
	try {
		const response = await axios(url);
		return callback(null, response.data);
	} catch (error) {
		console.log(error);
		return callback({
			statusCode: 500,
			title: 'Something Went Wrong.',
			message: 'Sorry pal, Our servers ran into some problem.',
			resolution:
				'You can try the search again or head to the web instead.',
		});
	}
};

module.exports = fetchData;
