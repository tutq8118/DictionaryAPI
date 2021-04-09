const express = require('express');
const { join } = require('path');

const addRoutesV1 = require('./routes/v1/routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use('static', express.static(join(__dirname, 'public')));

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

addRoutesV1(app);


app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
