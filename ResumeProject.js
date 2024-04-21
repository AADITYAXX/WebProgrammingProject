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


// Create a new div element to hold the timer
var timerDiv = document.createElement("div");
timerDiv.id = "timer";
timerDiv.style.position = "fixed";
timerDiv.style.top = "10px";
timerDiv.style.right = "10px";
timerDiv.style.padding = "10px";
timerDiv.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
timerDiv.style.border = "1px solid #ccc";
timerDiv.style.borderRadius = "5px";
document.body.appendChild(timerDiv);

// Set the initial time for the timer (15 minutes)
var totalTime = 15 * 60;
var minutes, seconds;

// Update the timer every second
var timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    // Use a while loop to ensure that totalTime is greater than or equal to 0
    while (totalTime >= 0) {
        minutes = parseInt(totalTime / 60, 10);
        seconds = parseInt(totalTime % 60, 10);

        // Display the timer in the div
        timerDiv.textContent = "Timer: " + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

        // Decrement totalTime
        totalTime--;

        // Break the loop when totalTime reaches 0
        if (totalTime === 0) {
            clearInterval(timerInterval);
            timerDiv.textContent = "Timer Expired!";
            break;
        }
    }
}

        // Function to change background color continuously
        function changeBackgroundColor() {
            const newColor = getRandomColor();
            document.body.style.backgroundColor = newColor; // Change background color
            setTimeout(changeBackgroundColor, 3000); // Repeat after 3 seconds (adjust as needed)
        }

        // Initial call to start color change loop
        changeBackgroundColor();
