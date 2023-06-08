// ARRAYS AND LOOP
// Assignment # 17-20

// Question:1
// Declare and initialize an empty multidimensional array.

var multiArray = ["Musfirah", [22, "waseem"], "apple", ["banana", "khao gi?"], true]

// Question: 2
// Declare and initialize a multidimensional array representing the following matrix:


var multidimensional = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
document.write(`<h3>2-Matrix</h3>${multidimensional[0]}<br>${multidimensional[1]}<br>${multidimensional[2]}`)

// Question:3
// Write a program to print numeric counting from 1 to 10.

document.write("<h3>3-Numeric counting from 1 to 10.</h3>")
for (var i = 1; i <= 10; i++) {
    document.write(i+"<br>")
}

// Question:4
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var numberInput=+prompt("Enter a number to show it's multiplication table",2);
var lenghtInput=+prompt("Enter lenght of multiplication table",10)
document.write("<h3>4-Multiplication Table of "+numberInput+" with lenght of "+ lenghtInput+"</h3>")
for(i=1;i<=lenghtInput;i++){
    document.write(numberInput + " x " + i +" = "+ numberInput*i +"<br>")
}

// Question:5
// Write a program to print items of the following array using for loop:
document.write("<h3>5-print items of an array using for loop</h3>")
var fruits=["apple", "banana", "mango", "orange","strawberry"]
for(var i=0;i<fruits.length;i++){
document.write( fruits[i]+"<br>")
}
for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>")
    }



// Question:6
//Generate the following series in your browser

document.write("<h3>Question-6</h3>")
document.write("<h4>Counting:</h4>")
for (var i = 1; i <= 15; i++) {
    document.write(i, " , ")
}
document.write("<h4>Reverse Counting:</h4>")
for (var i = 10; i >= 1; i--) {
    document.write(i, " , ")
}
document.write("<h4>Even:</h4>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i, " , ")
    }

}
document.write("<h4>Odd:</h4>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(i, " , ")
    }
}
document.write("<h4>Series:</h4>")
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i,"k", " , ")
    }
}





// Question:7
// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not.

document.write("<h3>7-Search by user input</h3>");
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What do yoyu want sir/madam?");

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


// Question:8
// Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

var array = [24, 53, 78, 91, 12]
var largest = 0;
for (var i = 0; i <= array.length; i++) {
    if (array[i] > largest) {
        var largest = array[i]
    }
}
document.write("<h3>8-Array items:</h3>", array, "<br>")
document.write("Largest number of an array is: ", largest)

// Question:9
// Write a program to identify the smallest number in thegiven array. A = [24, 53, 78, 91, 12]Write a program to identify the smallest number in the given array.


var smallArray = [24, 53, 78, 91, 12];
var minvalue = smallArray[0];
for (var i = 0; i < smallArray.length; i++) {
    if (smallArray[i] < minvalue) {
        minvalue = smallArray[i];
    }

}
document.write("<h3>9-Array items:</h3>", smallArray, "<br>")
document.write("Smallest number of an array is: ", minvalue)


// Question:10
// Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h3>10-Multiples of 5 ranging 1 to 100.</h3>")
for(var i=1;i<=100;i++){
    if(i % 5===0){
        document.write(i," , ")
    }
}

