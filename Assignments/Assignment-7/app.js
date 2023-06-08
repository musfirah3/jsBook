// Chapter:7 User input & conditional statement
// Question:1
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

document.write("<h3>1-Karachities only..</h3>")
var city = prompt("Enter your city name")
var cityName = city.toLowerCase()
if (cityName == "karachi") {
    document.write("Welcome to the city of light")
} else {
    document.write("Only karachiites allow")
}

// Question:2
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am

document.write("<h3>2-Greeting..</h3>")
var gender = prompt("Enter your gender please")
if (gender == "male") {
    document.write("Good Morning Sir")
} else {
    document.write("Good Morning Ma'am")
}

// Question:3
// Write a program to take input color of road traffic signal
// from the user & show the message

document.write("<h3>3-Traffic light check..</h3>")
var color = prompt("Enter any traffic signals light")
if (color == "red") {
    document.write("Must Stop")
}
else if (color == "yellow") {
    document.write("Ready to move")
} else {
    document.write("Move now")
}

// Question: 4
// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

document.write("<h3>4-Fuel Check</h3>")
var fuel = prompt("Enter the remainig fuel in your car")
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car")
} else {
    document.write("Carry on sir")
}

// Question:5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// It gives output


var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// it doesn't give us output because b is post increment

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// Condition 2 and condition 4 is true



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// It gives output

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// The true condition is valid

if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Condition works

// Question:6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page

var obtainedMarks = prompt("6-Enter your obtained marks in 3 subjects")
var totalMarks = 300;
var Percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + obtainedMarks);
document.write("<br>Percentage: " + Percentage + "%");

if (Percentage >= 80) {
    document.write("<br>Your grade is A-one")
    document.write("<br>Excellent")
} else if (Percentage >= 70) {
    document.write("<br>Your grade is A")
    document.write("<br>Good")
} else if (Percentage >= 60) {
    document.write("<br>Your grade is B")
    document.write("<br>You need to improve")
} else if (Percentage < 60) {
    document.write("<br>Fail")
    document.write("<br>Sorry")
} else {
    document.write("Invalid input")
}

// Question:7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

document.write("<h3> 7- Guess game </h3>")
var guessedNumber = 8;
var guess = prompt("Guess any number ranging from 1-10")
if (guess == guessedNumber) {
    document.write("Bingo! Correct answer")
} else if (guess == "9" || guess == "7") {
    document.write("You are close enough to the correct answer")
} else {
    document.write("Try again")
}

// Question:8
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

document.write("<h3> 8- Check number is divisble by 3 or not.. </h3>")
var check = +prompt("Enter any number");
if (check % 3 == 0) {
    document.write("Your number is divisble by 3")
} else {
    document.write("Sorry your given number is not divisble by 3")
}

// Question: 9
// Write a program that checks whether the given input is an even number or an odd number.

document.write("<h3> 9- Check number is even or odd.. </h3>")
var num = +prompt("Enter any number for even odd check")
if (num % 2 == 0) {
    document.write("The number is even")
}
else {
    document.write("The number is odd")
}

// Question:10
// Write a program that takes temperature as input and shows a message

document.write("<h3>10-Temperature check..</h3>")
var temp = prompt("Enter the temperature of your zone please")
if (temp > 40) {
    document.write("It's too hot outside")
} else if (temp > 30) {
    document.write("The Weather today is Normal.")
}
else if (temp > 20) {
    document.write("Today's Weather is cool.")
}
else if (temp > 10) {
    document.write("OMG! Today's Weather is so cool.")
}
else {
    document.write("Wrong input!")
}

// Question: 11
// Write a program to create a calculator for +,-,*, / & % using if statements.

document.write("<h3>11-Calculator</h3>");
var firstNum = +prompt("Enter first number for calculation");
var secNum = +prompt("Enter your second number for calculation");
var ope = prompt("Enter your operation \n +,-,*,/");
if (ope === "+") {
    document.write("Your number is added: ")
    document.write(firstNum + secNum)
} else if (ope === "-") {
    document.write("Your number is subtracted: ")
    document.write(firstNum - secNum)
}
else if (ope === "*") {
    document.write("Your number is multiplied: ")
    document.write(firstNum * secNum)
}
else if (ope === "/") {
    document.write("Your number is divided: ")
    document.write(firstNum / secNum)
}
else {
    document.write("Your required operation is not available yet..")
}