const axios = require("axios");

const DECK_API_URL = "https://deckofcardsapi.com/api";
const AVAILABLE_CARDS = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];

const getCardsString = () => {
  const result = AVAILABLE_CARDS.reduce((prev, curr) => {
    return `${prev}${curr}H,${curr}D,${curr}C,${curr}S,`;
  }, "").slice(0, -1);
  return result;
};

const decksApi = () => {
  return {
    getNewDeck: async () => {
      const response = await axios.get(
        `${DECK_API_URL}/deck/new/shuffle/?deck_count=1&cards=${getCardsString()}`
      );
      if (response.status === 200) {
        console.log(`Got new deck with id ${response.data.deck_id}`);
        return response.data;
      }
      console.log("Error getting deck");
    },
  };
};

exports.default = decksApi;
