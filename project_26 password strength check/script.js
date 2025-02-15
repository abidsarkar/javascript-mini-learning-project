let password = document.getElementById("password");
let strengthText = document.getElementById("strength-text");
let strengthBar = document.getElementById("strengthBar");

password.addEventListener("input", function () {
  let val = password.value;
  let strength = 0;
  if (val.match(/[a-z]+/)) {
    strength += 1;
  }
  if (val.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (val.match(/[0-9]+/)) {
    strength += 1;
  }
  if (val.match(/[$@#&!]+/)) {
    strength += 1;
  }
  if (val.length > 5) {
    strength += 1;
  }
  switch (strength) {
    case 0:
      strengthBar.style.width = "0%";
      strengthText.innerText = "";
      break;
    case 1:
      strengthBar.style.width = "20%";
      strengthBar.style.backgroundColor = "red";
      strengthText.innerText = "Very Weak";
      break;
    case 2:
      strengthBar.style.width = "40%";
      strengthBar.style.backgroundColor = "#FD673A";

      strengthText.innerText = "Weak";
      break;
    case 3:
      strengthBar.style.width = "60%";
      strengthBar.style.backgroundColor = "#FF922C";
      strengthText.innerText = "Medium";
      break;
    case 4:
      strengthBar.style.width = "80%";
      strengthBar.style.backgroundColor = "#3DE45F";
      strengthText.innerText = "Strong";
      break;
    case 5:
      strengthBar.style.width = "100%";
      strengthBar.style.backgroundColor = "#2ECF03";
      strengthText.innerText = "Very Strong";
      break;
  }
});
