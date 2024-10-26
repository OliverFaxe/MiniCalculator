alert("Welcome! Press OK for MiniCalculator");

let firstQuestion = Number(prompt("Choose first number in math problem"));
while (isNaN(firstQuestion)) { // Use a loop to keep asking for a valid number
    alert("That is not a valid number. Please enter a valid number.");
    firstQuestion = Number(prompt("Choose first number in math problem"));
}

let secondQuestion = Number(prompt("Choose second number in math problem"));
while (isNaN(secondQuestion)) { // Use a loop to keep asking for a valid number
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
        result = undefined; // Prevents displaying a result
    } else {
        result = firstQuestion / secondQuestion;
    }
} else {
    alert("Invalid arithmetic selected.");
}

if (result !== undefined) {
    alert("Result: " + result); // Added a space after "Result:"
}

