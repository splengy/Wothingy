document.addEventListener('DOMContentLoaded', () => {
    // Handle onboarding form submission
    document.getElementById('onboarding-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const userData = {
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value
        };

        // Store the data in LocalStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Proceed to the next part of the app or show a success message
        alert('Onboarding complete!');
    });

    // Reset Database button functionality
    document.getElementById('reset-db').addEventListener('click', function() {
        localStorage.clear();
        alert('Database has been reset.');
    });
});
