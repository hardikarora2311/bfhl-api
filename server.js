const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// POST method endpoint
app.post('/bfhl', (req, res) => {
  // Your logic for handling POST requests goes here
  const requestData = req.body.data;
  
  // Process the requestData and construct the response
  const response = {
    is_success: true,
    user_id: "hardik_arora_23112001",
    email: "ha3029@srmist.edu.in",
    roll_number: "RA2011003010419",
    numbers: requestData.filter(item => !isNaN(item)),
    alphabets: requestData.filter(item => typeof item === 'string' && item.length === 1),
    highest_alphabet: [requestData.filter(item => typeof item === 'string' && item.length === 1).sort().pop()]
  };

  res.json(response);
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is up and running!`);
});
