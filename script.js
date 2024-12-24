// Set the correct password
const correctPassword = "123"; // Change this to your desired password

// Get the form and input elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

// Handle form submission
passwordForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the entered password
    const enteredPassword = passwordInput.value;

    // Check if the password is correct
    if (enteredPassword === correctPassword) {
        // Redirect to the next page if the password is correct
        window.location.href = "nextPage.html"; // Replace with the actual next page URL
    } else {
        // Show an error message if the password is incorrect
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
});
