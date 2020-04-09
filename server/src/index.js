const express = require("express");
const decksApi = require("./decks").default;

const DecksApi = decksApi();
const app = express();
app.use(express.json());

const decks = [];

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/deck", (req, res, next) => {
  res.json(decks);
});

app.post("/deck", async (req, res, next) => {
  DecksApi.getNewDeck().then((response) => {
    decks.push(response);
    console.log(decks);
    return res.json(response);
  });
});

app.get("/deck/:deck_id/deal", (req, res, next) => {
  const selected = decks.filter((deck) => deck.deck_id === req.params.deck_id);
  res.json(selected);
});
