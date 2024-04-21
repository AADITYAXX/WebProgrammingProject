// resume.js

document.addEventListener("DOMContentLoaded", function() {
    // Get query parameters from URL
    const queryParams = new URLSearchParams(window.location.search);
    const resumeData = Object.fromEntries(queryParams.entries());

    // Generate resume content
    let resumeHTML = "<h2>Generated Resume</h2>";
    resumeHTML += "<div class='resume-details'>";
    // Display photo if available
    if (resumeData.photo) {
        resumeHTML += "<img src='" + resumeData.photo + "' alt='Profile Picture'>";
    }
    // Display other resume information
    resumeHTML += "<ul>";
    for (const key in resumeData) {
        if (key !== "photo") {
            resumeHTML += "<li><strong>" + key + ":</strong> " + resumeData[key] + "</li>";
        }
    }
    resumeHTML += "</ul>";
    resumeHTML += "</div>";

    // Display resume
    const resumeContainer = document.getElementById("resume");
    resumeContainer.innerHTML = resumeHTML;
});
