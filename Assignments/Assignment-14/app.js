// FUNCTION
// Assignment # 35-38

// Question:1
// Write a function that displays current date & time in your browser.

document.write("<h3>1-Function to display time</h3>");
function time() {
    let date = new Date();
    document.write(date)
}
time();

// Question:2
// Write a function that takes first & last name and then it greets the user using his full name.

document.write("<h3>Function to greet some one</h3>")
function greet() {
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name.");
    document.write(`Hello ${firstName} ${lastName}`)
}
greet()

// Question:3
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

document.write("<h3>3-Function to add numbers</h3>");
function addNumber() {
    let first = +prompt("Enter any integer");
    let second = +prompt("Enter any integer again");
    let add = first + second;
    document.write("Addition of both number is : ", add)
}
addNumber();

// Question:4
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

document.write("<h3>4-Calculator</h3>");
let calculator = () => {
    let firstInt = +prompt("Enter any integer");
    let secondInt = +prompt("Enter any second integer");
    let operation = prompt("Enter any basic operation ", "+,-,*,/")
    if (operation == "+") {
        let add = firstInt + secondInt
        document.write("Addition of both integer is: ", add)
    }
    else if (operation == "-") {
        let sub = firstInt - secondInt
        document.write("Subtraction of both integer is: ", sub)
    }
    else if (operation == "*") {
        let mul = firstInt * secondInt
        document.write("Multiplication of both integer is: ", mul)
    }
    else if (operation == "/") {
        let division = firstInt / secondInt
        document.write("Addition of both integer is: ", division)
    } else {
        document.write("Error!")
    }
}
calculator()

// Question:5
// Write a function that squares its argument.

document.write("<h3>5-Square function</h3>")
function squares() {
    let num = prompt("Enter any number")
    let square = num ** 2
    document.write("Square of ", num, " is: ", square)
}
squares();


// Question:6
// Write a function that computes factorial of a number.

document.write("<h3>6-Factorial of a Number</h3>");
function factorial(num) {
    if (num < 0) {
        return -1
    } else if (num > 0) {

        return num * factorial(num - 1);

    } else if (num === 0 || num === 1) {

        return 1
    } else {
        document.write("Invalid input!")
    }
}
let num = prompt("Enter any number for factorial");
let fact = factorial(num)
document.write(`Factorial of a number ${num} is: ${fact}`)

// Question:7
// Write a function that take start and end number as inputs & display counting in your browser.

document.write("<h3>7-Function for counting</h3>")
function counting() {

    let number1 = +prompt("Enter the number where the counting should start")
    let number2 = +prompt("Enter the number where the counting should stop")

    for (var i = number1; i <= number2; i++) {
        document.write(i + "<br>")
    }
}
counting();

// Question:8
// Write a nested function that computes hypotenuse of a right angle triangle.

document.write("<h3>8-Nested Function</h3>");

function hypotenuse(base, perpendicular) {
    function square(side) {
        return side * side
    }
    let baseSquare = square(base);
    let perpendicularSquare = square(perpendicular);
    let hypotenuseSquare = baseSquare + perpendicularSquare;
    let hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}
let baseLenght = +prompt("Enter the value of base")
let perpendicularLenght = +prompt("Enter the value of perpendicular");
let hypotenuseLenght = hypotenuse(baseLenght, perpendicularLenght).toFixed(2);

document.write("Hypotenuse of a triangle is: ", hypotenuseLenght)

// Question:9
// Write a function that calculates the area of a rectangle.
// A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// Calculate area of a rectangle using value arguments
function area(width, height) {
    let area = width * height;
    return area;
}
// Calculate area of a rectangle using variable arguments
function areaVariable() {
    let height = arguments[0];
    let width = arguments[1];
    let area = height * width;
    return area
}

document.write("<h3>9(i)Calculate area of a rectangle using value arguments</h3>")
let widthValue = 56;
let heightValue = 78;
let areaValue = area(widthValue, heightValue);
document.write("Area of a rectangle using value arguments is: ", areaValue);



document.write("<h3>9(ii)Calculate area of a rectangle using variable arguments</h3>")

let widthvariable = 23;
let heightVariable = 65;
let areaVariableArgu = areaVariable(widthvariable, heightVariable);
document.write("Area of a rectangle using variable arguments is: ", areaVariableArgu)


// Question:10
// Write a JavaScript function that checks whether a passed string is palindrome or not?


document.write("<h3>Palindrome Function</h3>")
function palindrome(str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
    let reveserText = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reveserText) {
        document.write("It's a palindrome")
        return true
    } else {
        document.write("It's not a palindrome")
    }
}

let string = prompt("Enter any string to check palindrome");
document.write("Entered string: ", string, "<br>")
palindrome(string)

// Question:11
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

document.write("<h3>11-Upper case function</h3>");
function upperCase(str) {
    let arr = str.split(' ');
    let arr1 = [];

    for (var i = 0; i < arr.length; i++) {
        arr1.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    return arr1.join(' ')
}

let stringUpper = prompt("Enter any string to convert in upper case");
let changeCase = stringUpper.toLowerCase()
document.write("Entered string: ", stringUpper, "<br>Result: ", upperCase(changeCase))

// Question:12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

document.write("<h3>12-Longest string in the string</h3>");
function find_longest_word(strin) {
    // Remove non-letter characters and convert to lowercase
    const lettersOnly = strin.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = strin.split(' ');
    // Initialize a variable to store the longest word
    let longest_Word = '';
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        // The longest word should be updated if the current word is longer than the longest word.
        if (words[i].length > longest_Word.length) {
            longest_Word = words[i];
        }
    }
    // Return the longest word
    return longest_Word;
}
const strin = prompt("Enter any string to check longest string", "Web Development Tutorial");
document.write("The original string: " + strin);
const results = find_longest_word(strin);
document.write("<br>Longest word of the said string: " + results)



// Question:13
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

document.write("<h3>13-Count the number of occurrences of the specified letter within the string.</h3>");
function count(string, letter) {
    let count = 0;
    for (var i = 0; i <= string.length; i++) {
        if (string.charAt(i) === letter) {
            count += 1;
        }
    }
    return count
}
const str = prompt("Enter any string: ");
const letter_to_check = prompt("Enter a letter to check: ");

const resultCount = count(str, letter_to_check);
document.write("Entered String: ", str, "<br>Letter to check: ", letter_to_check, "<br>Result: ", resultCount)


// Question:14
// Create 2 functions that calculate properties of a circle

document.write("<h3>14-The Geometrizer</h3>");

function calCircumference() {
    let radius = 24;
    let result = (2 * Math.PI * radius).toFixed(2);
    return result
}
let circumference = calCircumference();
document.write("The circumference of a circle is: ", circumference)

function calArea() {
    let radius = 24;
    let result = (Math.PI * radius ** 2).toFixed(2)
    return result
}
let areaCircle = calArea();
document.write("<br>The area is: ", areaCircle)