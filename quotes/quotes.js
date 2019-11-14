let quotes = [
    {
        id: 1,
        name: "Ernest Hemingway",
        quote: "The hell with luck. I'll bring the luck with me."
    },
    {
        id: 2,
        name: "Alan Watts",
        quote: "This is the real secret of life - to be completely engaged with what one is doing in the here and now. And instead of calling it work, realize that it is play."
    },
    {
        id: 3,
        name: "Nassim Taleb",
        quote: "What I learned on my own I still remember."
    }
]

function addQuote(quote) {
    quotes = [...quotes, quote];
    return quotes;
}

function getQuotes() {
    return quotes;
}

function deleteQuote(id) {
    quotes = quotes.filter(quote => quote.id !== id);
    return quotes.length;
}

module.exports = {
    getQuotes,
    deleteQuote,
    addQuote,
};