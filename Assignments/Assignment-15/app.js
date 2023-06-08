// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DOWHILE LOOPS 
// Assignment # 38-44

//Question:1
// Write a custom function power ( a, b ), to calculate the value of a raised to b.

document.write("<h3>1-Power fuction</h3>");
function power(a, b) {
    let result = Math.pow(a, b)
    return result
}
let firstNum = +prompt("Enter any number for the base.");
let secNum = +prompt("Enter number for the power.")
let powerResult = power(firstNum, secNum)
document.write(firstNum, " raised to the power ", secNum, " is ", powerResult)


// Question:2
// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

document.write("<h3>2-Leap Year or not</h3>")
function leapYear() {
    var date = prompt("Enter the year you want to check");
    if (date % 4 != 0) {
        document.write("Your entered year is tropical")
    }
    else if (date % 4 == 0 && date % 100 != 0) {
        document.write("Tis is a leap year")
    }
    else if (date % 4 == 0 && date % 100 == 0 && date % 400 != 0) {
        document.write("You entered tropical year")
    }
    else {
        document.write("This year has a 366 days instead of 365")
    }

}
leapYear();


// Question:3
// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle 

document.write("<h3>3-Area of a triangle.</h3>");

function side(a, b, c) {
    return (a + b + c) / 2;

}
function areaTriangle(a, b, c) {
    let s = side(a, b, c);
    let area = (s * (s - a) * (s - b) * (s - c))
    return area;
}
const aSide = +prompt("Enter the value of a")
const bSide = +prompt("Enter the value of b")
const cSide = +prompt("Enter the value of c")
const resultArea = areaTriangle(aSide, bSide, cSide)
document.write("Area of a triangle is: ", resultArea)

// Question:4
// . Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

document.write("<h3>4-Three Function.</h3>");
function average(mark1, mark2, mark3) {
    let avg = (mark1 + mark2 + mark3) / 3;
    return avg
}
function percentage(totalMark, maxMarks) {

    let per = (totalMark / maxMarks) * 100;
    return per;
}
function mainFunction() {
    let subMark1 = +prompt("Enter the marks of subject 1:");
    let subMark2 = +prompt("Enter the marks of subject 2:");
    let subMark3 = +prompt("Enter the marks of subject 3:");

    let totalMark = subMark1 + subMark2 + subMark3
    let aveg = average(subMark1, subMark2, subMark3)
    let resultPer = percentage(totalMark, 300).toFixed(2)


    document.write("User got ", resultPer, "% in 3 subjects");
}
mainFunction()


// Question:5
// You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
document.write("<h3>5-Customize indexOf function.</h3>");
function customIndex(string, char) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1
}
let text = prompt("Enter any string")
let searchChar = prompt("Enter a character from string.")
let resultCustom = customIndex(text, searchChar)
document.write(searchChar, " is at indexOf ", resultCustom);

// Question:6
// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long

document.write("<h3>6-Delete all vowels from a sentences</h3>")


function deleteVowel(string) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (var i = 0; i < string.length; i++) {
        let cleanedStr = string[i].replace(/[^A-Za-z]+/g, '').toLowerCase();
        if (vowels.indexOf(cleanedStr) === -1) {
            result += string[i]
        }
    }
    return result;
}
let strg = prompt("Enter any string", "Hello world")
let updated = deleteVowel(strg)
document.write("Original Text: ", strg, "<br>Updated text: ", updated)

// Question:7
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 

document.write("<h3>7-Count the number of occurrences of any 2 vowels </h3>");
function isVowel(ch) {
    switch (ch) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return 1;
        default:
            return 0;
    }
}

let str = prompt("Enter a string: ", "Pleases read this application and give me gratuity");
let found = 0;
let count = 0;
let vowels = "";
for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
        found++;
    } else {
        found = 0;
    }
    if (found == 2) {
        vowels += str[i - 1] + str[i];
        found = 1;
        count++;
    }
}
document.write("Entered string: ", str)
document.write("<br>Such occurrences are :" + vowels);
document.write("<br>Total number of occurences : " + count);


// Question:8
// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters

document.write("<h3>8-Distance between two cities</h3>");
const distance = prompt("Enter the approx distance between two cities in km ")
// in meters
function inMeters() {
    const factor = 1000;
    let meter = distance * factor.toFixed(3)
    return meter;
}
let resultMeter = inMeters();
document.write("In meters: ", resultMeter)

// in inches
function inInches() {
    const factor = 39370.1;
    let inch = distance * factor.toFixed(3)
    return inch;
}
let resultinch = inInches();
document.write("<br>In inches:", resultinch)

// in feets
function inFeet() {
    const factor = 3280.84;
    let Feet = distance * factor.toFixed(3)
    return Feet;
}
let resulFeet = inFeet();
document.write("<br>In feets: ", resulFeet)

// in centimeters
function inCentiMeters() {
    const factor = 100000;
    let Centimeter = distance * factor.toFixed(3)
    return Centimeter;
}
let resultCentiMeter = inCentiMeters();
document.write("<br>In centimeters: ", resultCentiMeter)


// Question:9
// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

document.write("<h3>9-Over time pay</h3>");
function overTimePay(hrsWorked) {
    const hour = 40;
    const overTimeRate = 12.00;
    if (hrsWorked <= hour) {
        return 0;
    } else {
        const overtimeHours = hrsWorked - hour;
        const overtime = overtimeHours * overTimeRate;
        return overtime;
    }
}
const housrsWorked = prompt("Enter the hours you worked");
const overtime = overTimePay(housrsWorked);
document.write("Overtime Pay: Rs. ", overtime);

// Question:10
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

document.write("<h3>10-Currency notes</h3>");
function currency(amount) {
    let note100 = Math.floor(amount / 100);
    let note50 = Math.floor((amount % 100) / 50);
    let note10 = Math.floor(((amount % 100) % 50) / 10);
    let remaining = Math.floor(((amount % 100) % 50) % 10);

    return {
        note100: note100,
        note50: note50,
        note10: note10,
        remaining: remaining
    }
}
const amountWithdraw = +prompt("Enter amount to withdraw!");
const currencyNote = currency(amountWithdraw);
document.write(`You will have ${currencyNote.note100} hundered notes ${currencyNote.note50} fifty notes ${currencyNote.note10} ten notes and ${currencyNote.remaining} coins `)
