// ResumeProject.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("Info");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        const formData = new FormData(form);

        // Redirect to resume page with query parameters
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = "resume.html?" + queryString;
    });

});

function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Function to change background color continuously
        function changeBackgroundColor() {
            const newColor = getRandomColor();
            document.body.style.backgroundColor = newColor; // Change background color
            setTimeout(changeBackgroundColor, 3000); // Repeat after 3 seconds (adjust as needed)
        }

        // Initial call to start color change loop
        changeBackgroundColor();
