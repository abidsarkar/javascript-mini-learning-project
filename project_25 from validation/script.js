let nameError = document.getElementById("nameError");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");
let submitError = document.getElementById("submitError");

let contactName = document.getElementById("contactName");

contactName.addEventListener("input", (e) => {
  if (contactName.value.trim() === "") {
    // Check for empty or whitespace-only
    nameError.innerHTML = "Name is required"; // More specific message
  } else if (contactName.value.length < 3) {
    // Example: Minimum length check
    nameError.innerHTML = "Name must be at least 3 characters";
  } else {
    nameError.innerHTML = ""; // Clear the error message
  }
});

// Example for other fields (phone, email, etc.) - adapt the validation rules
let contactPhone = document.getElementById("contactPhone");

contactPhone.addEventListener("input", (e) => {
  const inputValue = contactPhone.value.trim();
  const cleanedValue = inputValue.replace(/[^0-9+-]/g, ""); // Remove non-numeric, +, - characters

  contactPhone.value = cleanedValue; // Update the input field with the cleaned value

  if (cleanedValue === "") {
    phoneError.innerHTML = "Phone is required";
  } else {
    const phoneLength = cleanedValue.replace(/[+-]/g, "").length; // Length without +,-
    const hasCountryCode = cleanedValue.startsWith("+");

    if (hasCountryCode) {
      if (phoneLength === 12 || phoneLength === 13) {
        // 12 or 13 digits after +
        phoneError.innerHTML = "";
      } else {
        phoneError.innerHTML =
          "Phone number with country code must have 12 or 13 digits after the +";
      }
    } else {
      if (phoneLength === 11) {
        // 10 digits without country code
        phoneError.innerHTML = "";
      } else {
        phoneError.innerHTML =
          "Phone number must have 11 digits (without country code)";
      }
    }
  }
});

// Form submission handling (important!)
const form = document.getElementById("myForm"); // Replace "myForm" with your form's ID
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let isValid = true; // Assume valid initially



  if (isValid) {
    // Form is valid, proceed with submission (e.g., send data to server)
    console.log("Form submitted successfully!");
    form.submit(); // Or send data using fetch/XMLHttpRequest
  } else {
    submitError.innerHTML = "Please correct the errors."; // Overall error message
  }
});
