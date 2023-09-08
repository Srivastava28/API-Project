const express = require('express');
const bodyParser = require('body-parser'); 
const axios = require('axios'); 
const app = express();
const port = 7850; 


app.use(bodyParser.json());


app.post('/convert', async (req, res) => {
  try {

    const { toConvert } = req.body;

    // Validate the request body
    if (!toConvert || !Array.isArray(toConvert) || toConvert.length === 0) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const conversions = [];

    for (const conversionRequest of toConvert) {
      const { amount, from, to } = conversionRequest;


      const exchangeValues = to.map((targetCurrency) => ({
        to: targetCurrency,
        value: amount * 2, // Dummy conversion rate
      }));

      conversions.push({ amount, from, exchangeValues });
    }

 
    const response = { conversions };

 
    res.json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
