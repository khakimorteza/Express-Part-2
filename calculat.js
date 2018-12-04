const express = require("express");
const app = express();

app.get("/:oper/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only");
  }

  switch (req.params.oper) {
    case "add":
      // console.log(req.params);
      req.params.result = num1 + num2;
      // console.log(req.params);
      delete req.params.oper;
      res.json(req.params);
      break;
    case "sub":
      req.params.result = num1 - num2;
      delete req.params.oper;
      res.json(req.params);
      break;
    case "mul":
      req.params.result = num1 * num2;
      res.json(req.params);
      delete req.params.oper;
      break;
    case "div":
      req.params.result = num1 / num2;
      delete req.params.oper;
      res.json(req.params);
      break;
    default:
  }
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(__dirname + "/405.html");
});

app.listen(3002, () => {
  console.log("you are listening to port 3002");
});
