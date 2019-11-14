const db = require('../data/dbConfig');

function getQuotes() {
    return db('quotes');
}

function addQuote(quote) {
    return db('quotes').insert(quote);
}

function removeQuote(id) {
    return db('quotes').where({ id }).del();
}

module.exports = {
    getQuotes,
    addQuote,
    removeQuote,
}