// MATH METHODS
// Assignment # 26-30

// Question:1
// Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("<h3>1-Multiply method of Math function</h3>")
let integer = prompt("Please enter any positive integer", 67.9987);
let round = Math.round(integer);
let floor = Math.floor(integer);
let ceil = Math.ceil(integer);
document.write(`Number: ${integer}<br> Round off value: ${round}<br>Floor value: ${floor}<br>Ceil value: ${ceil}`)


// Question:2
// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<h3>2-Multiply method of Math function for negative integer</h3>")
let negative = prompt("Enter any negative floating point number.", -99.999);
let roundNeg = Math.round(negative);
let floorNeg = Math.floor(negative);
let ceilNeg = Math.ceil(negative);
document.write(`Number: ${negative}<br> Round off value: ${roundNeg}<br>Floor value: ${floorNeg}<br>Ceil value: ${ceilNeg}`)

// Question:3
// Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write("<h3>3-Absolute Value.</h3>")
var absolute = Math.abs(-5)
document.write("The absolute value of -5 is: ", absolute)

// Question:4
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browse

document.write("<h3>4-Simulates a dice using random() method</h3>")
let random = Math.floor(Math.random() * 6 + 1);
let random2 = Math.floor(Math.random() * 6 + 1);
document.write("Random dice value:", random, "<br>Random dice value:", random2)


// Question:5
// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

document.write("<h3>4-Simulates a coin toss using random() method</h3>")
let randomCoin2 = Math.floor(Math.random() * 2 + 1);
let randomCoin22 = Math.floor(Math.random() * 2 + 1);
document.write(randomCoin2, "<br>")
if (randomCoin2 === 2) {
    document.write("Random coin value: Heads<br>")
} else {
    document.write("Random coin value: Tails<br>")
}
document.write(randomCoin2, "<br>")
if (randomCoin2 === 2) {
    document.write("Random coin value: Heads<br>")
} else {
    document.write("Random coin value: Tails<br>")
}

// Question:6
// Write a program that shows a random number between 1 and 100 in your browser
document.write("<h3>6-Random number between 1 and 100. </h3>")
let number = Math.floor(Math.random() * 100 + 1);
document.write("Random number between 1 and 100 is: ", number)

// Question:7
// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write("<h3>7-Weight of a user</h3>")
let userWeight = prompt("Please enter your weight.");
let weight = parseFloat(userWeight);
if (!isNaN(weight)) {
    document.write("The weight of a user is ", weight.toFixed(2), " kilograms")
    }

    // Question:8
    // Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

    document.write("<h3>Guess the secret number.</h3>")
    let secretRandom = Math.floor(Math.random() * 10 + 1)
    let askUser = prompt("Guess the secret number between 1 and 10.");
    document.write("Guessed Number: ", askUser, "<br>Random Number: ", secretRandom, "<br>")
    if (secretRandom == askUser) {
        document.write("Congratulation! you guess the right number.")
    } else {
        document.write("Try Again.")
    }