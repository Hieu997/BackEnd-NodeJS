var calculator = require("./calc.js");

var x = 70,
  y = 20;

console.log("Addition is " + calculator.add(x, y));

console.log("Subtraction is " + calculator.sub(x, y));

console.log("Multiplication is " + calculator.mult(x, y));

console.log("Division is " + calculator.div(x, y));
