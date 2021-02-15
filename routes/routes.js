const IndexRouter = require('./index/index.routes');

module.exports = function (app) {
	app.use('/', [IndexRouter.getIndex]);
	app.use('/index.html', [IndexRouter.getIndex]);
};
