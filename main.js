"use strict";

const email = document.getElementById("email");
const button = document.getElementById("button");
const form = document.getElementById("signup");

let errormsg = document.createElement("p");

function valid() {
  var pattern = /^[a-z0-9]{1,20}@[a-z]{3,10}[\.]com$/;
  if (pattern.test(email.value)) {
    alert("Email Sent");
  } else {
    errormsg.innerHTML = "Please enter a valid email address";
    errormsg.style.fontSize = "0.8rem";
    errormsg.style.color = "red";
    errormsg.style.display = "block";
    errormsg.style.textAlign = "left";
    errormsg.style.marginLeft = "2rem";
    errormsg.style.marginTop = "0.3rem";
    email.style.borderColor = "red";
    form.appendChild(errormsg);
  }
}

button.addEventListener("click", valid);
email.addEventListener("focus", function () {
  errormsg.innerHTML = "";
  email.style.borderColor = "transparent";
});
