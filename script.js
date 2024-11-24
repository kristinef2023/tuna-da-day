// Function to toggle the visibility of the modal (contact form)
function toggleContactForm() {
    const modal = document.getElementById('contact-modal');
    // Toggle the display of the modal (show or hide)
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";  // Show the modal
    }
}

// Function to handle the form submission via mailto
function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form field values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    // Construct the mailto link with the new email address
    const mailtoLink = `mailto:tunadaday@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally, reset the form fields
    e.target.reset();

    // Close the modal after form submission (optional)
    toggleContactForm();
}

// Ensure the modal is hidden on page load
window.onload = function() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = "none"; // Ensure the modal starts hidden
};
