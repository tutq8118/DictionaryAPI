const express = require('express');
const { join } = require('path');

const addRoutes = require('./routes/routes');

const app = express();

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

addRoutes(app);

app.use(express.static(join(__dirname, 'public')));

module.exports = app;
