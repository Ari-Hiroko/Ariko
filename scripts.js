document.addEventListener("DOMContentLoaded", function() {
    console.log("Fluent Design Home Page Loaded");

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form Submitted:', { name, email, message });

        // Clear the form fields after submission
        form.reset();

        // Display a thank you message
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
    });
});
``` ▋