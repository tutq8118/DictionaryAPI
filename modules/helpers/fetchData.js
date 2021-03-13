const axios = require('axios');

const fetchData = async (url, callback) => {
	try {
		const response = await axios(url, { timeout: 10000 });
		return callback(null, response.data);
	} catch (error) {
		console.log(error);
	}
};

module.exports = fetchData;
