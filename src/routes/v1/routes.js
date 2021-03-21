const IndexRouter = require('./index/index.routes');

module.exports = function (app) {
	app.use('/v1', [IndexRouter.getIndex]);
};
