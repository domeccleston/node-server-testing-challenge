const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');
const Quotes = require('../quotes/quotesModel');

describe('server', () => {
    test('returns 200 to a GET request at /', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
    })

    test('returns an array of quotes in response to a GET request at /api/quotes', async () => {
        const response = await request(server).get('/api/quotes');
        expect(response.body).toBeDefined();
    })

    test('we can add a quote through a post request to /api/quotes', async () => {
        const testQuote = {name: "Dom", quote: "Testquote"};
        const newQuote = await Quotes.addQuote(testQuote);
        const response = await request(server).get('/api/quotes');
    })

    test('we can delete a quote through a delete request to /api/quotes', async () => {
        const testRemoval = await Quotes.removeQuote(3);
        const response = await request(server).get('/api/quotes');
        console.log(response.body)
    })

})