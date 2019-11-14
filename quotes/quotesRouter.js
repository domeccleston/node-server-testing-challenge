const router = require('express').Router();
const Quotes = require('./quotesModel');


router.get('/quotes', async (req, res) => {
    try {
        const quotes = await Quotes.getQuotes();
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ error, message: "Quotes not found" })
    }
})

 router.post('/quotes', async (req, res) => {
    try {
        const newQuote = await Quotes.addQuote(req.body);
        res.status(200).json("New quote added successfully");
    } catch (error) {
        res.status(500).json({error, message: "Could not add quote"})
    }
})

/* router.delete('/quotes/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json(Quotes.deleteQuote(id))
})  */

module.exports = router;