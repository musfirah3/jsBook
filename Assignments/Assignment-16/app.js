// EVENTS
// Assignment # 43-48

function deleteRow(no) {
   document.getElementById('row' + no + '').outerHTML = '';
}

const counterElement=document.getElementById('counter');
const increaseButton=document.getElementById('increaseBtn')
const decreaseButton=document.getElementById('decreaseBtn');

let count=0;
counterElement.textContent=count;

function increaseFun(){
   count++;
   counterElement.textContent=count
}

function decreaseFun(){
   count--;
   counterElement.textContent=count
}