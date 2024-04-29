const { aFunction } = require("./bController");
const CalculatorLib = require("./calculatorlab");
CalculatorLib.aFunction();
const calculatorLib = new CalculatorLib("localhost://");

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = calculatorLib.add(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const minusNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 - number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
const b = "bValue";
module.exports = {
  addNumbers,
  b,
};
