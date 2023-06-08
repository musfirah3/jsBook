// DATE METHODS
// Assignment # 31-34

// Question:1
// Write a program that displays current date and time in your browser.
document.write("<h3>1-Current date and time</h3>")
let dateToday = new Date();
document.write(dateToday)

// Question:2
//  Write a program that alerts the current month in words.

document.write("<h3>2-Current Month</h3>");
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months = new Date();
let monthName = monthArr[months.getMonth()];
document.write("Current Month: ", monthName)

// Question:3
// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
document.write("<h3>3-Current Day.</h3>")
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
let days = new Date().getDay();
let day_Name = dayArray[days]
document.write("Today is ", day_Name.slice(0, 3))

// Question:4
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

document.write("<h3>4-Displays a message.</h3>")
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
let day = new Date().getDay();
let dayName = dayArr[day];
if (dayName == "Saturday" || dayName == "Sunday") {
    document.write("It's fun day.")
} else {
    document.write("Today is a boring working day.")
}

// Question:5
// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

document.write("<h3>5-Displays a message.</h3>")
let dateNow = new Date().getDate();
if (dateNow <= 15) {
    document.write("First fifteen days of the month")
} else {
    document.write("Last days of the month ")
}

// Question:6
// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

document.write("<h3>6-Minutes since midnight,Jan. 1,1970</h3>")
let currentDate = new Date();
let min = (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / 60000;
document.write("Current Date: ", currentDate, "<br>Elapsed minutes since January 1,1970: ", min)
let milli = currentDate.getTime() - currentDate.getMinutes()
document.write("<br>Elapsed milli seconds since January 1,1970: ", milli)

// Question:7
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
document.write("<h3>7-Test whether it's after noon or before noon</h3>");
let noon = new Date().getHours();
if (noon <= 12) {
    document.write("It's AM")
} else {
    document.write("It's PM")
}


// Question:8
// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

document.write("<h3>8- Date object for the last day of the last month of 2020</h3>");
let laterDate = new Date("2020-12-31");
document.write("Later date: ", laterDate)

// Question:9
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?

document.write("<h3>9-Days passed since 1st Ramadan of 2023</h3>");
let dayRamdan = new Date("3-22-2023").getTime();
let dayToday = new Date().getTime();
let diffTime = dayToday - dayRamdan;
let diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
document.write(diffDays, " days have passed since 1st  Ramadan, 2023")

// Question:10
// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

document.write("<h3>10-Elpased second since new year</h3>")
let now = new Date();
let beg_of_year = new Date("2023-1-1");
let diff = Math.floor((now - beg_of_year) / 1000);
document.write("On reference date ", now, "<br>", diff, " seconds had passed since the beginning of 2023");


// Question:11
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

document.write("<h3>Question-11</h3>");
let atMoment = new Date()
let toDay = new Date();
let currentHours = toDay.getHours();
toDay.setHours(currentHours - 1);
document.write(`<b>Current date:</b> ${atMoment}<br> <b>1 hour ago</b>, it was: ${toDay}`)


// Question:12
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

document.write("<h3>12-100 years back</h3>");
let date = new Date();
let still = new Date();
let currentYear = still.getFullYear();
still.setFullYear(currentYear - 100);
document.write(`<b>Current date:</b> ${date}<br> <b>100 years back</b>, it was: ${still}`)

// Question:13
// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

document.write("<h3>13-Calculate birth year</h3>");
let askUser = +prompt("Enter your age please.");
let nowYear = new Date().getFullYear();
let birthYear = nowYear - askUser;
document.write(`Your age is ${askUser}<br> Your birth year is ${birthYear}`)

// Question:14
// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

document.write("<h3>14-K-Electric Bill</h3>");
let CustomerName = prompt("Enter the customer name please.");
let month = prompt("Enter the current month");
let number_of_units = +prompt("Enter the number of units you consumed");
const charges = 35;
const netAmount = number_of_units * charges;
const lateCharges = netAmount / 10;
const grossPay = netAmount + lateCharges;
document.write(`Customer Name: ${CustomerName} <br>Month: ${month}<br>Number of units: ${number_of_units}<br> Charges per unit: ${charges}<br><br>Net Amount Payable(within Due Date): ${netAmount}<br>Late payment surcharge: ${lateCharges} <br>Gross Amount Payable(after Due Date): ${grossPay}`)
