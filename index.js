alert("Welcome! Press OK for MiniCalculator");

let firstQuestion = Number(prompt("Choose first number in math problem"));
while (isNaN(firstQuestion)) {
    alert("That is not a valid number. Please enter a valid number.");
    firstQuestion = Number(prompt("Choose first number in math problem"));
}

let secondQuestion = Number(prompt("Choose second number in math problem"));
while (isNaN(secondQuestion)) {
    alert("That is not a valid number. Please enter a valid number.");
    secondQuestion = Number(prompt("Choose second number in math problem"));
}

let arithmetic = prompt("Choose + - / * to solve problem");

let result;

if (arithmetic === "+") {
    result = firstQuestion + secondQuestion;
} else if (arithmetic === "-") {
    result = firstQuestion - secondQuestion;
} else if (arithmetic === "*") {
    result = firstQuestion * secondQuestion;
} else if (arithmetic === "/") {
    if (secondQuestion === 0) {
        alert("Division by zero is not allowed.");
        result = undefined;
    } else {
        result = firstQuestion / secondQuestion;
    }
} else {
    alert("Invalid arithmetic selected.");
}

if (result !== undefined) {
    alert("Result: " + result);
}

