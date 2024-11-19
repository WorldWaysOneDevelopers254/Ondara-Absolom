// ........................The about page js code....................................Dynamic Typing and Deleting Effect
const textElement = document.getElementById("changing-text");
const words = ["A WEB DESIGNER", "A FRONT END DEVELOPER", "A BACK END DEVELOPER", "A PROGRAMMER"];
let index = 0; // Current word index
let charIndex = 0; // Current character index
let isDeleting = false; // Tracks if the effect is deleting

function typeEffect() {
  const currentWord = words[index];
  if (isDeleting) {
    charIndex--; // Remove one character
  } else {
    charIndex++; // Add one character
  }

  // Update the text content
  textElement.textContent = currentWord.slice(0, charIndex);

  // Decide on the next step
  if (!isDeleting && charIndex === currentWord.length) {
    // Finished typing the word
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Finished deleting the word
    isDeleting = false;
    index = (index + 1) % words.length; // Move to the next word
    setTimeout(typeEffect, 500); // Pause before typing the next word
  } else {
    // Continue typing or deleting
    const delay = isDeleting ? 50 : 100; // Typing is slower, deleting is faster
    setTimeout(typeEffect, delay);
  }
}
//.....................................Mobile responsive code......................................................................//
// Start the typing effect
typeEffect();
// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Scroll Animations
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight / 1.3) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Initial Animation Setup
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
  });
  // JavaScript to handle form submission and redirect to WhatsApp
  document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construct the message to send to WhatsApp
    var whatsappMessage = "Name: " + name + "%0A" + "Email: " + email + "%0A" + "Message: " + message;
    
    // WhatsApp link format with phone number and message
    var whatsappLink = "https://wa.me/254112293409?text=" + whatsappMessage;

    // Redirect to WhatsApp with pre-filled message
    window.location.href = whatsappLink;
  });
  // JavaScript to open the Support Modal
function openSupportModal() {
    document.getElementById("supportModal").style.display = "block";
  }
  
  // JavaScript to close the Support Modal
  function closeSupportModal() {
    document.getElementById("supportModal").style.display = "none";
  }
  
  // JavaScript to update the year automatically in the copyright section
  document.getElementById('year').textContent = new Date().getFullYear();
  