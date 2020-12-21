const express = require('express');
const logger = require('morgan');
const path = require('path');

require('./config/hbs.config');

const app = express();

/**
 * Middlewares
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

/**
 * View setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/**
 * Configure routes
 */
const router = require('./config/routes.config');
app.use('/', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});