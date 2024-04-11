document.addEventListener('DOMContentLoaded', () => {
    // Function to display user data
    function displayUserData() {
        const userDataDisplay = document.getElementById('user-data-display');
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            userDataDisplay.textContent = `Stored User Data: ${JSON.stringify(userData)}`;
        } else {
            userDataDisplay.textContent = 'No user data stored.';
        }
    }

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

        displayUserData(); // Update the display

        // Proceed to the next part of the app or show a success message
        alert('Onboarding complete!');
    });

    // Reset Database button functionality
    document.getElementById('reset-db').addEventListener('click', function() {
        localStorage.clear();
        displayUserData(); // Update the display
        alert('Database has been reset.');
    });

    // Display user data on initial load
    displayUserData();
});
