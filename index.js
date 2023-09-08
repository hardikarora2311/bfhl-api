const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// POST method endpoint
app.post('/bfhl', (req, res) => {
  try {
    const requestData = req.body.data;

    // Input validation
    if (!Array.isArray(requestData)) {
      return res.status(400).json({ error: 'Invalid input. Expected an array.' });
    }

    const numbers = [];
    const alphabets = [];

    // Process the requestData to separate numbers and alphabets
    for (const item of requestData) {
      if (typeof item === 'number') {
        numbers.push(item.toString());
      } else if (typeof item === 'string' && item.length === 1 && /^[A-Za-z]$/.test(item)) {
        alphabets.push(item.toUpperCase()); // Convert to uppercase for case-insensitive comparison
      }
    }

    // Find the highest alphabet
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

    // Construct the response
    const response = {
      is_success: true,
      user_id: 'hardik_arora_23112002',
      email: 'ha3029@srmist.edu.in',
      roll_number: 'RA2011003010419',
      numbers,
      alphabets,
      highest_alphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
  // This is a hardcoded response for the GET request
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
