const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const requireDir = require('require-dir');
const { errors } = require('celebrate');

require('dotenv').config();

require('./databases/connection');
requireDir('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api', require('./routes'));
app.use(errors());

module.exports = app;
