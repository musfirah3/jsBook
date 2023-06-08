// Chapter: 5 Math Expression
// Question: 1
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is: " + sum);


// Question:2
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is: " + sum);
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is: " + sum);
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is: " + sum);
var num1 = Number(prompt("Enter any number"))
var num2 = parseInt(prompt("Enter any number"))
var sum = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is: " + sum);


// Question:3
var value
document.write("Value after variable deceleration is: " + value);
value = 5
document.write("<br>Initial value is: " + value)
value++;
document.write("<br>Value after increment is: " + value)
value += 7
document.write("<br>Value after addition is: " + value)
value--;
document.write("<br>Value after decrement is: " + value);
var division = value % 3;
document.write("<br> The remainder is: " + division)

// Question:4
var ticketPrice = 600
var output = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is:" + output)

// Question:5
var x = +prompt("Enter any table");
document.write("<h4>Table of " + x + "<br></h4>");
for (var i = 1; i <= 10; i++) {
    var result = i * x;
    document.write(x + " x " + i + "=" + result + "<br>");
}

// Question:6
var temperature = 34;
var convert = (temperature * 9 / 5) + 32;
document.write("Tempreatur of Karachi is " + temperature + "<sup>o</sup>" + "C is " + convert + "<sup>o</sup>" + "F")
var temperature2 = 91;
var convert2 = (temperature2 - 32) * 5 / 9
document.write("Tempreature of Lahore is" + temperature2 + "<sup>o</sup>" + "F is " + convert2 + "<sup>o</sup>" + "C")


// Question:7
var item1 = 650
var item2 = 100
var orderedItem1 = 3
var orderedItem2 = 7
var charges = 100
var totalCost = (item1 * orderedItem1) + (item2 * orderedItem2) + charges;
document.write("<h2>Shopping Cart</h2><br> Price of item 1 is: " + item1 +
    "<br> Quantity of item 1 is: " + orderedItem1 + "<br>Price of item 2 is: "
    + item2 + "<br>Quantity of orderd item 2 is: "
    + orderedItem2 + "<br>Shipping charges: " + charges + "<br><br>Total cost of your order is: " + totalCost)


// Question:8
var $ = 10;
var riyals = 25
var pkr = $ * 283.50 + 25 * 75.58;
document.write("Total currency in PKR is: " + pkr)

// Question:9
var total = 500
var obtained = 470
var percentage = (obtained / total) * 100;
document.write("<h1>Mark Sheet</h1><br>Total Marks: " + total + "<br>MArks Obtained: " + obtained + "<br>Percentage: " + percentage);

// Question:10
var value = 198;
var output = ((value + 5) * 10) / 2
alert(output);

// Question:11
var currentYear = 2023;
var brithYear = 2000;
var age1 = currentYear - brithYear;
var age2 = currentYear / brithYear;
document.write("You  are either " + age1 + " or " + age2 + " years old")

// Question:12
var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius ** 2
document.write("<h2>The Geometrize</h2><br>Radius of a circle is: " + radius + "<br>The circumference is: " + circum + "<br>The area is: " + area)

// Qusetion:13
var snack = "Chai";
var age = 22;
var age2 = 65;
var amount = 3;
var totalNeeded = (amount * 365.5) * (age2 - age);
document.write("I will need " + totalNeeded + " " + snack + " to last until the ripe old age of " + age2)