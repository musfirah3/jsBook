// Chapter:6Math Expression
// Question:1
var value = 12;
var perincerment = ++value
var postincrement = value++
var oerdecrement = --value
var postdecrement = value--
var result = value
document.write("The value of a is: " + result)

// Question:2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--
//   1 - 0 + 1 + 1
// 3
document.write("a is " + a + "<br>b is " + b + "<br>result is " + result)

// Question:2
var userName = prompt("Enter your name");
alert("Hello " + userName);

// Querstion:4
var num = +prompt("Enter any number", "5");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "<br>")
}
// Question:5
var subject1 = prompt("Enter your first subject")
var subject2 = prompt("Enter your second subject")
var subject3 = prompt("Enter your third subject")
var total = 100
var mark1 = +prompt("Enter the marks of first subject")
var mark2 = +prompt("Enter the marks of second subject")
var mark3 = +prompt("Enter the marks of third subject")
var per1 = (mark1 / total) * 100
var per2 = (mark2 / total) * 100
var per3 = (mark3 / total) * 100
var totalMarks = new String(mark1 + mark2 + mark3);
var final = new String((totalMarks / 300) * 100);
document.write("<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>" + subject1 + "</td><td>" + total + "</td><td>" + mark1 + "</td><td>" + per1 + "%</td></tr><tr><td>" + subject2 + "</td><td>" + total + "</td><td>" + mark2 + "</td><td>" + per2 + "%</td></tr><tr><td>" + subject3 + "</td><td>" + total + "</td><td>" + mark3 + "</td><td>" + per3 + "%</td></tr><tr><td>" + "</td><td>" + " <b>300</b></td><td>" + totalMarks.bold() + "</td><td>" + final.bold() + "%</td></tr>")
