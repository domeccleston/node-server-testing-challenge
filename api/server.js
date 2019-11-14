const express = require('express');
const server = express();
const quotesRouter = require('../quotes/quotesRouter.js');
const cors = require('cors');
const helmet = require('helmet');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json("API running");
})

server.use('/api/', quotesRouter);

module.exports = server;
