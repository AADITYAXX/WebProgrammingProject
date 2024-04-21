// Function to generate the resume content
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    const profilePhotoFile = document.getElementById('profilePhoto').files[0];
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Create an array to store experience data with error handling
    const experiences = [];
    for (const exp of experienceContainer.children) {
      // Check if the element has a child element with the ID "company" before accessing it
      if (exp.querySelector('input#company')) {
        experiences.push({
          company: exp.querySelector('input#company').value,
          title: exp.querySelector('input#title').value,
          startDate: exp.querySelector('input#startDate')?.value,
          endDate: exp.querySelector('input#endDate')?.value,
          description: exp.querySelector('textarea#description').value,
        });
      } else {
        console.error('Missing company information in an experience section!');
      }
    }
  
    // Create an array to store skills
    const skills = [];
    for (const skill of skillsContainer.querySelectorAll('input[type="text"]')) {
      skills.push(skill.value);
    }
  
    // Handle profile photo upload (if a file is selected)
    let profilePhotoURL = "";
    if (profilePhotoFile) {
      // Validate file type (optional)
      if (!profilePhotoFile.type.match('image/.*')) {
        alert('Please select a valid image file.');
        return; // Prevent further processing if not an image
      }
  
      // FileReader API to convert image to base64 for display
      const reader = new FileReader();
      reader.readAsDataURL(profilePhotoFile);
      reader.onload = function(event) {
        profilePhotoURL = event.target.result; // Base64 encoded image data
  
        // Generate resume HTML content using the base64 encoded image
        const resumeHTML = `
        <div class="resume-header">
          ${profilePhotoURL ? `<img src="${profilePhotoURL}" alt="Profile Photo">` : ''}
          <h2>${name}'s Resume</h2>
          <p>
            <a href="mailto:${email}">${email}</a> | ${phone}
          </p>
        </div>
        <h2>Experience</h2>
        <ul>
          ${experiences.map(exp => `
            <li>
              <h3>${exp.company}</h3>
              <h4>${exp.title}</h4>
              ${exp.startDate ? `<p>Start Date: ${exp.startDate}</p>` : ''}
              ${exp.endDate ? `<p>End Date: ${exp.endDate}</p>` : ''}
              <p>${exp.description}</p>
            </li>
          `).join('')}
        </ul>
        <h2>Skills</h2>
        <ul>
          ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        `;
        
        // Display resume content in the dedicated container
        resumeContainer.innerHTML = resumeHTML;
      };
    }
  });
  