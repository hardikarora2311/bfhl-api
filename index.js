const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.path, req.method);
  next();
});
function findHighestAlphabet(alphabets) {
  if (!alphabets || alphabets.length === 0) {
    return [];
  }
  return [alphabets.reduce((a, b) => (a > b ? a : b))];
}
app.use((error, req, res, next) => {
  const numbers = [];
  const alphabets = [];
  const highest_alphabet = [];
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    res.status(400).json({
      is_success: false,
      user_id: "Hardik_Arora_23112002",
      email: "ha3029@srmist.edu.in",
      roll_number: "RA2011003010419",
      numbers,
      alphabets,
      highest_alphabet,
    });
  } else {
    next();
  }
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.post("/bfhl", async (req, res) => {
  let jsonData = req.body.data;
  const numbers = [];
  const alphabets = [];

  jsonData.forEach((element) => {
    if (typeof element === "number") {
      numbers.push(element);
    } else if (typeof element === "string") {
      alphabets.push(element);
    }
  });
  const highest_alphabet = findHighestAlphabet(alphabets);

  res.json({
    is_success: true,
    user_id: "Hardik_Arora_23112002",
    email: "ha3029@srmist.edu.in",
    roll_number: "RA2011003010419",
    numbers,
    alphabets,
    highest_alphabet,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
