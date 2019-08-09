const express = require('express');
const carsRouter = require('../cars/cars-router');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
 res.send('<h2>Home Page!</h2>');
});

module.exports = server;
