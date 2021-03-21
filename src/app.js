const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');

const addRoutesV1 = require('./routes/v1/routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

addRoutesV1(app);

app.use(express.static(join(__dirname, 'public')));

module.exports = app;
