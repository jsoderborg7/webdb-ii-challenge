const express = require('express');

const server = express();

server.use(express.json());

const db = require('./data/db-config');




module.exports = server;