// Button Click
document.getElementById("magicButton").addEventListener("click", () => {
    const btn = document.getElementById("magicButton");
    btn.textContent = "🎉 You clicked me!";
    btn.style.backgroundColor = "#4caf50";
    document.getElementById("buttonResult").textContent = "Nice click!";
  });
  
  // Keypress Detection
  document.getElementById("keyInput").addEventListener("keyup", (event) => {
    document.getElementById("keyOutput").textContent = `You typed: ${event.key}`;
  });
  
  // Secret Double Click
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    document.getElementById("secretMsg").textContent = "🥷 Secret unlocked!";
  });
  
  // Slideshow
  const images = [
    "https://images.pexels.com/photos/9669089/pexels-photo-9669089.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  let index = 0;
  
  function showImage() {
    document.getElementById("slideImage").src = images[index];
  }
  
  function nextImage() {
    index = (index + 1) % images.length;
    showImage();
  }
  
  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
  }

  // Add event listeners for slideshow navigation
  document.getElementById("nextBtn").addEventListener("click", nextImage);
  document.getElementById("prevBtn").addEventListener("click", prevImage);

  // Animate the box
const animateBox = document.getElementById("animateBox");

// Every 2 seconds, toggle the animation
setInterval(() => {
  animateBox.classList.toggle("moveIt");
}, 2000);
  // Accordion functionality
  document.querySelectorAll('.accordion-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isActive = content.style.display === 'block';
  
      // Close all accordion contents
      document.querySelectorAll('.accordion-content').forEach((content) => {
        content.style.display = 'none';
      });
  
      // Toggle the clicked accordion content
      content.style.display = isActive ? 'none' : 'block';
    });
  });  

  
  // Form Validation
  const passwordInput = document.getElementById("password");
  const passwordFeedback = document.getElementById("passwordFeedback");
  
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters.";
    } else {
      passwordFeedback.textContent = "✅ Password is strong!";
    }
  });
  
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();
  
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Invalid email format.");
      return;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    alert("🎉 Form submitted successfully!");
  });
  