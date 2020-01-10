const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`The server was requested by ${req.protocol}://${req.get('host')}${req.originalURL}\nTime: ${moment().format('MMMM Do YYYYY, h:mm:ss a')}`);
    next();
};

module.exports = logger;