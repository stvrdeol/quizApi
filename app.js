const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Sample quiz data (replace with your own data)
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["4", "6", "7", "8"],
    answer: "7",
  },
];

// Define a route to get a random quiz question
app.get("/api/question", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quizData.length);
  const randomQuestion = quizData[randomIndex];
  res.json(randomQuestion);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/api/questions", (req, res) => {
  res.json(quizData);
});
