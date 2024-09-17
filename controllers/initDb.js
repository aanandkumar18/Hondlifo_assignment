const Crypto = require('../models/schema');
const axios = require('axios');

exports.initializeDb  =  async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = Object.values(response.data).slice(0, 10); // Top 10 results

    await Crypto.deleteMany({}); // Clear previous data

    // Store each crypto data in MongoDB
    for (const ticker of tickers) {
      const { name, last, buy, sell, volume, base_unit } = ticker;
      await Crypto.create({ name, last, buy, sell, volume, base_unit });
    }

    res.send('Top 10 cryptocurrencies fetched and stored successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching or storing crypto data');
  }
};
