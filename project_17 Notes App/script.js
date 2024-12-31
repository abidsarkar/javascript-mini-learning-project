const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");

// Show notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    // Reapply listeners to restored textareas
    document.querySelectorAll(".inputBox textarea").forEach(textarea => {
        textarea.addEventListener("keyup", updateStorage);
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

    // Add keyup listener to textarea
    textarea.addEventListener("keyup", updateStorage);

    // Update localStorage
    updateStorage();
});

// Delete note on trash icon click
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Update localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
