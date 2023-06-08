// DOM
// Assignment # 58-67



//i. Get element of id “main-content” and assign them in a variable.

let main_content = document.getElementById('main-content')

// ii. Display all child elements of “main-content” element.

let childNodes = main_content.childNodes;
console.log(childNodes);

// iii. Get all elements of class “render” and show their innerHTML in browser.

let render = document.getElementsByClassName('render')
for (var i = 0; i < render.length; i++) {
    let text = render[i].innerHTML + " <br>";
    console.log(text)
}

// iv. Fill input value whose element id first-name using javascript.

let firstName = document.getElementById('first-name');
firstName.value = "Musfirah";

// v. Repeat part iv for id ”last-name” and “email”

let lastName = document.getElementById('last-name').value = "Waseem"
let email = document.getElementById('email').value = "musfirahwaseem0@gmail.com"



// Question 2
// i. What is node type of element having id “form-content”.

document.write("<h3>2(i)Node type of form content</h3>")
let nodeType = document.getElementById('form-content').nodeType
document.write("Node type of form content is: ", nodeType)

// ii. Show node type of element having id “lastName” and its child node

document.write("<h3>2(ii)ii. Show node type of element having id “lastName” and its child node</h3>")
let node = document.getElementById('lastName')
document.write("<br>Node type of element having id lastName is: " + node.nodeType)
let child = node.childNodes
console.log(child)

// iii. Update child node of element having id “lastName”.

let update = document.getElementById('lastName').firstChild.nodeValue = "Last Name: Waseem";

// iv. Get First and last child of id “main-content”.

let content = document.getElementById('main-content');
console.log("First child: ", content.firstChild)
console.log("Last Child: ", content.lastChild)

// v. Get next and previous siblings of id “lastName”.

let nameLast = document.getElementById('lastName');
console.log("Next sbiling: ", nameLast.nextSibling)
console.log("Pervious sbiling: ", nameLast.previousSibling)

// vi. Get parent node and node type of element having id “email”

let parent = document.getElementById('email').parentNode
let type = parent.nodeType
console.log("Parent Node of email: ", parent, "Node type of parent: ", type)
