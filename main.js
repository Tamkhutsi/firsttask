let number1;
let number2;
let operation;

while (true) {
  number1 = prompt("Enter the first number:");

  if (number1 === null || isNaN(number1)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    number1 = Number(number1);
    break;
  }
}

while (true) {
  operation = prompt("Enter the operation (+, -, *, /, % , **):");

  if (
    operation === null ||
    !["+", "-", "*", "/", "%", "**"].includes(operation)
  ) {
    alert("Invalid operation. Please enter a valid operation.");
  } else {
    break;
  }
}

while (true) {
  number2 = prompt("Enter the second number:");

  if (number2 === null || isNaN(number2)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    number2 = Number(number2);
    break;
  }
}

let result;
switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (num2 === 0) {
      result = "Error: Division by zero";
    } else {
      result = number1 / number2;
    }
    break;
  case "%":
    result = (number1 * number2) / 100;
    break;
  case "**":
    result = Math.pow(number1, number2);
    break;
  default:
    alert("Invalid operation.");
    break;
}

alert("Result: " + result);