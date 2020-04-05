// Importing
const express = require('express');
const routes = express.Router();

// Entry route
routes.get('/', (request, response) => {
    response.json({
        application: 'Spread Kindness Application',
        server: 'https://api.spreadkindness.app'
    });
});

// Exporting module
module.exports = routes;