const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let i = document.createElement("i");
  inputBox.className = "inputBox";
  inputBox.setAttribute("contenteditable", "true");
  i.classList.add("fa-solid", "fa-trash-can");
  notesContainer.appendChild(inputBox).appendChild(i);
});
