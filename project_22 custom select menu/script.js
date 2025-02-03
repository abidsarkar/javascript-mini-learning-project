let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.querySelectorAll(".option");
let list = document.getElementById("list");
let arrow = document.getElementById("arrow");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    selectText.innerHTML = options[i].textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  });
}

selectField.addEventListener("click", function () {
  list.classList.toggle("hide");
});
