const axios = require("axios");

const DECK_API_URL = "https://deckofcardsapi.com/api";

const decksApi = () => {
  return {
    getNewDeck: async () => {
      const response = await axios.get(
        `${DECK_API_URL}/deck/new/shuffle/?deck_count=1`
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
