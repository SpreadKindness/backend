// Importing
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// instantiate the application
const app = express();

// App settings
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(routes);

// Exporting module
module.exports = app;