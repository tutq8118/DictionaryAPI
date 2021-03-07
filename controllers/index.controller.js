const { join } = require('path');
module.exports = {
	render: function (req, res) {
		res.render('index', {});
	},
	errorHandler: function (req, res, error) {
		let { statusCode } = error;

		res.header('Access-Control-Allow-Origin', '*');

		return res
			.status(statusCode)
			.render(join(`../views/${statusCode}.pug`));
	},
};
