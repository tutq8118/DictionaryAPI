const IndexRouter = require('./index/index.routes');

module.exports = function (app) {
	app.use('/api/v1', [IndexRouter.getWord]);
};
