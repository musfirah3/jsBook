// STRING METHODS
// Assignment # 21-25

// Question:1
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.


document.write("<h4>1-Greet with full name</h4>");

// First name capitilaize

var firstName = prompt("Please enter your first name");
var lowerFirst = firstName.toLowerCase();
var captiliazeFirst = lowerFirst[0].toUpperCase()
var comFirst = captiliazeFirst + lowerFirst.slice(1)

// last name capitiliaze

var lastName = prompt("Please enter your last name")
var lowerLast = lastName.toLowerCase();
var captiliazeLast = lowerLast[0].toUpperCase()
var comlast = captiliazeLast + lowerLast.slice(1)

// Concatenate both

var fullName = comFirst + " " + comlast;
document.write("Hello " + fullName)

// Question:2
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

document.write("<h3>2-Favorite mobile phone model:</h3>")
var string = prompt("Please enter your favourite mobile phone model.");
var lengthString = string.length
document.write("My favorite phone is: ", string, "<br> Lenght of a string is: ", lengthString)

// Question:3
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
document.write("<h3>3-Index of letter n from Pakistani</h3>")
var string2 = "Pakistani";
document.write("Index of 'n' is: "+string2.indexOf("n"))

// Question:4
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

document.write("<h3>4-Last index of L </h3>")
var string3="Hello World"
document.write("String: ",string3,"<br>")
document.write("Last index of l is: "+string3.lastIndexOf("l"))

// Question:5
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
 document.write("<h3>5-3rd index of Pakistani</h3>");
 var pak="Pakistani";
 document.write("String:",pak,"<br>");
document.write( "Character at index 3:",pak.charAt(3))

// Question:6
// Repeat Q1 using string concat() method.
document.write("<h4>6-Again Greet with full name using concat()</h4>");

// First name capitilaize

var firstName = prompt("Please enter your first name");
var lowerFirst = firstName.toLowerCase();
var captiliazeFirst = lowerFirst[0].toUpperCase()
var comFirst = captiliazeFirst + lowerFirst.slice(1)

// last name capitiliaze

var lastName = prompt("Please enter your last name")
var lowerLast = lastName.toLowerCase();
var captiliazeLast = lowerLast[0].toUpperCase()
var comlast = captiliazeLast + lowerLast.slice(1)

// Concatenate both using concat()

var fullName = comFirst.concat(comlast)
document.write("Hi " + fullName)

// Question:7
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

document.write("<h3>7-Replace Word</h3>")
var city="Hyderabad";
var rep=city.replace("Hyder","Islam")
document.write("City:",city,"<br> After Replacement:",rep);

// Question:8
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

document.write("<h3>8- Repalce multiple word</h3>")
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace=message.replace("and","&" ).replace("and","&");

document.write("<b>Original String:</b> ",message,"<br> <b>Changed String:</b> ",replace)


// Question:9
// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

document.write("<h3>9-Conversion of string into number</h3>")
var stringNumber="472";
var type1=typeof(stringNumber)
var convertString=parseInt(stringNumber);
var type2=typeof(convertString)
document.write("<b>Value:</b>",stringNumber,"<br><b>Type:</b>",type1,"<br><b>Value:</b>",convertString,"<br><b>Type:</b>",type2)

// Question:10
// Write a program that takes user input. Convert and show the input in capital letters.

document.write("<h3>10-Convert input into capitiliaze case</h3>")
var userInput="peanuts"
var convertUser=userInput.toUpperCase();
document.write(`<b>User Input: </b>${userInput}<br><b>Upper Case:</b>${convertUser}`)

// Question:11
// Write a program that takes user input. Convert and show the input in title case.

document.write("<h3>11-Convert input into title case</h3>")
var user=prompt("Please enter any string..").toLowerCase();
var userFirst=user[0].toUpperCase();
var full=userFirst+user.slice(1)
document.write("<b>User input:</b> ",user,"<br><b>Title Case: </b>",full)

// Question:12
// Write a program that converts the variable num to string.var num = 35.36 ; Remove the dot to display “3536” display in your browser

document.write("<h3>12-Convert number into string</h3>")
var number=35.36;
var conversion=number.toString();
var dot=conversion.replace(".","");
document.write("<b>Number: </b>",number,"<br><b>Result: </b>",dot)

// Question:13
// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.

document.write("<h3>13-Validation of a password</h3>")
function validUser(username) {
    for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            return false;
        }
    }
    return true


}
var username = prompt("Please enter your user name.");
if (validUser(username)) {
    document.write("You are successfully logged in")
}
else {
    document.write("Please enter your valid user name",)
}


// Question:14
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

document.write("<h3>14-Search by user input</h3>");
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What do yoyu want sir/madam?").toLowerCase();

var found = false;
var index = -1;

for (let i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        found = true;
        index = i;
        break;
    }
}

if (found) {
    document.write(bakeryItems[index], " is <b>available</b> at ", index, " index in our bakery")
} else {

    document.write("We are sorry. ", userInput, " is <b> not available </b> at our bakery")
}

// Question:15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

document.write("<h3>15-Password Validiation</h3>")
function isValidPassword(password) {
  // Check password length
  if (password.length < 6) {
    document.write("Password must at least 6 characters long", "<br>")
    return false;

  }

  // Check if password starts with a number
  if (!isNaN(password.charAt(0))) {
    document.write("Paswsword should not start with a number", "<br>")
    return false;

  }

  // Check if password contains at least one alphabet and one number
  const hasAlphabet = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  if (!hasAlphabet || !hasNumber) {
    document.write("Password contains at least one alphabet and one number", "<br>")
    return false;

  }

  // Password meets all requirements
  return true;
}


// Prompt the user to enter a password until it is valid
let password = prompt("Enter a password:");
document.write("<b>Entered Password: </b>", password, "<br>")
if (!isValidPassword(password)) {
  document.write("Invalid password! Please enter a valid password.");
} else {
  document.write("Valid password!");
}


// Question:16
// Write a program to convert the following string to an array using string split method.
var university="University of Karachi";
var arr=university.split("");
document.write("<h3>16-Convert string into an array</h3>")
arr.forEach(element => {
  document.write(element,"<br>")
});

// Question:17
// Write a program to display the last character of a user input.

document.write("<h3>17-Display the last character of a user input</h3>")
var userInput="Pakistan";
var lastChar=userInput.charAt(userInput.length-1)
document.write("Last character of string:",lastChar)


// Question:18
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

document.write("<h3>18-Count number of occurrences of word</h3>")
var string="the quick brown fox jumps over the lazy dog";
var count=(string.match(/the/g)||[]).length;
// The g in the regular expression (short for global) says to search the whole string rather than just find the first occurrence.

document.write("Text:",string,"<br> There are ",count," occurrences of word 'the'")

