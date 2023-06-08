// EVENTS 
// Assignment # 49-52

// Question:1
const form = document.getElementById('signupForm');
const output = document.getElementById('output');



function login(e) {
  e.preventDefault()
  alert("Your form is successfully submitted")
  let userName = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;
  let result = userName + password + email;
  console.log(result)


  output.innerHTML = `
        <p>Name: ${userName}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
      `;

  form.reset();
};



// Question:2
function readmore() {
  document.getElementById("offline").innerHTML = "The Toyota Land Cruiser also sometimes spelled as LandCruiser is a series of four-wheel drive vehicles produced by the Japanese automobile manufacturer Toyota. It is Toyota's longest running series of models. As of 2019, the sales of the Land Cruiser totalled more than 10 million units worldwide"

}
function clickMe() {
  document.getElementById("offlineRevo").innerHTML="Revo Rocco is about way more than just a car. It's about you and your power move. It's about unleashing your freedom and command. It's about challenging and recharging yourself. It's about your determination to make the move that you have always wanted to."

}
function readMore() {
  document.getElementById("offlineSonata").innerHTML = "SONATA flexes its muscle on command to keep you feeling confident and in charge in all driving situations."

}
function detalis() {
  document.getElementById("offlineCivic").innerHTML = "The Civic is the quintessential small car, and likely the one most people envision when they think of frugal, practical daily transport, even more so than rivals "

}