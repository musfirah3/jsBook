// Chapter:12-13
// IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

// Question:1
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter.

document.write("<h3>1-Character check..</h3>");
function checkCharacterType(character) {
    var charCode = character.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
        document.write("Input is an uppercase letter");
    } else if (charCode >= 97 && charCode <= 122) {
        document.write("Input is a lowercase letter");
    } else {
        document.write("Input is a number");
    }
}

var userInput = prompt("Enter a character:");
checkCharacterType(userInput);

// Question:2
// Write a JavaScript program that accept two integers and  display the larger. Also show if the two integers are equal.

document.write("<h3>2-Integer Check..</h3>")
var intFirst=+prompt("Enter any first integer");
var intSecond=+prompt("Enter any second integer");
if(intFirst>intSecond){
    document.write("First number: "+intFirst+" is greater than: "+intSecond)
}else if(intFirst<intSecond){
    document.write("First number: "+intFirst+" is less than: "+intSecond)
}else if(intFirst==intSecond){
    document.write("First number: "+intFirst+" and second number: "+intSecond+" both are equal")
}else{
    document.write("Wrong input..")
}

// Question: 3
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

document.write("<h3>3-Check whether the number is positive, negative or zero...</h3>")
var numInput=+prompt("Enter any number");
if(numInput>0){
    document.write("The number is positive")
}else if(numInput<0){
    document.write("The number is negative")
}else {
    document.write("The number is zero")
}

// Question:4
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

document.write("<h3>4-Check alphabetic character...</h3>")
var alpha=prompt("Enter any alphabetic character")
if(alpha=="a"||alpha=="e"||alpha=="i"||alpha=="o"||alpha=="u"){
    document.write("You entered vowel")
}else{
    document.write("You entered consonants")
}

// Question:5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

document.write("<h3>5-Check Password...</h3>")
var correctPassword="password123"
var password=prompt("Enter your password");
if(correctPassword===password){
    document.write("Correct! The password you entered matches the original password")
}
else if(password===""){
    document.write("Please enter your password")
}else{
    document.write("Incorrect password")
}

// Question:6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

document.write("<h3>6-Fixed if/else statement</h3>")
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting)
}
else {
    greeting = "Good evening";
    document.write(greeting)
}


// Question:7
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
document.write("<h3>7-Greeting according 24 hours format clock</h3>")
var time=prompt("Enter time using 24 hour format",1200);
if(time>=0000 && time < 1200){
    document.write("Good Morning")
}else if(time>=1200 && time < 1700){
    document.write("Good Afternoon")
}else if(time>=1700 && time < 2100){
    document.write("Good Evening")
}else if(time>=2100 && time < 2359){
    document.write("Good Night")
}else{
    document.write("Invalid input")
}