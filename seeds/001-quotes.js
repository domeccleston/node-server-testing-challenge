exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("quotes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quotes").insert([
        { id: 1, name: "Ernest Hemingway", quote: "The hell with luck. I'll bring the luck with me." },
        { id: 2, name: "Alan Watts", quote: "This is the real secret of life - to be completely engaged with what one is doing in the here and now. And instead of calling it work, realize that it is play." },
        { id: 3, name: "Nassim Taleb", quote: "What I learned on my own I still remember." }
      ]);
    });
};
