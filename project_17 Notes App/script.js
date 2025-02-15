const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");

// Show notes from localStorage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";

  // Reapply event listeners to restored textareas and icons
  document.querySelectorAll(".inputBox textarea").forEach((textarea) => {
    textarea.addEventListener("keyup", updateStorage);
  });

  document.querySelectorAll(".inputBox i").forEach((icon) => {
    icon.addEventListener("click", function () {
      this.parentElement.remove();
      updateStorage();
    });
  });
}
showNotes();

// Add a new textarea on button click
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("div");
  let textarea = document.createElement("textarea");
  let i = document.createElement("i");

  // Set classes and attributes
  inputBox.className = "inputBox";
  textarea.placeholder = "Write your note here...";
  i.classList.add("fa-solid", "fa-trash-can");

  // Append elements
  inputBox.appendChild(textarea);
  inputBox.appendChild(i);
  notesContainer.appendChild(inputBox);

  // Add event listeners for new elements
  textarea.addEventListener("keyup", updateStorage);
  i.addEventListener("click", function () {
    inputBox.remove();
    updateStorage();
  });

  // Update localStorage
  updateStorage();
});

// Update localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
