const express = require("express");
const decksApi = require("./decks.api").default;

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

app.get("/deck/new", async (req, res, next) => {
  DecksApi.getNewDeck().then((response) => res.json(response));
});
