const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("div");
  let textarea = document.createElement("textarea");
  let i = document.createElement("i");
  inputBox.className = "inputBox";
  textarea.placeholder = "Write your note here...";
  i.classList.add("fa-solid", "fa-trash-can");
  inputBox.appendChild(textarea);
  inputBox.appendChild(i);
  notesContainer.appendChild(inputBox);
});
