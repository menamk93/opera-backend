const express = require('express');
const app = express();
const routaProdutos = require('./routes/produtos');

app.use('/produtos', routaProdutos);

module.exports = app;