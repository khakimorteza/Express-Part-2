const express = require("express");
const app = express();

app.get("/rock", (req, res) => {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  let rock = [
    { user: "rock", ai: "rock", result: "tie" },
    { user: "rock", ai: "paper", result: "lose" },
    { user: "rock", ai: "scissors", result: "win" }
  ];
  res.json(rock[randomNum]);
});

app.get("/paper", (req, res) => {
  let randomNum = Math.floor(Math.random() * 3);
  let paper = [
    { user: "paper", ai: "rock", result: "lose" },
    { user: "paper", ai: "paper", result: "tie" },
    { user: "paper", ai: "scissors", result: "win" }
  ];
  res.json(paper[randomNum]);
});

app.get("/scissor", (req, res) => {
  let randomNum = Math.floor(Math.random() * 3);
  let scissor = [
    { user: "scissor", ai: "rock", result: "lose" },
    { user: "scissor", ai: "paper", result: "win" },
    { user: "scissor", ai: "scissors", result: "tie" }
  ];
  res.json(scissor[randomNum]);
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});
app.listen(3002, () => {
  console.log("you are listening to port 3002");
});
