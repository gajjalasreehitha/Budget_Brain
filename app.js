// JavaScript code to enhance interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset for navbar height
            behavior: "smooth"
          });
        }
      });
    });
  
    // Placeholder for login functionality
    const loginLink = document.querySelector("a[href='#login']");
  
    loginLink.addEventListener("click", () => {
      alert("Login functionality will be implemented here.");
    });
  
    // Search bar functionality
    const searchBar = document.querySelector(".search-bar");
    const searchInput = searchBar.querySelector("input");
    const searchButton = searchBar.querySelector("button");
  
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
        searchInput.value = "";
      } else {
        alert("Please enter a search query.");
      }
    });
  
    // Feature card hover effect
    const featureCards = document.querySelectorAll(".features .feature");
  
    featureCards.forEach(card => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
      });
  
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
      });
    });
  });
  

// Get elements
const signupModal = document.getElementById('signupModal');
const signupLink = document.getElementById('signupLink');
const signupForm = document.getElementById('signupForm');

// Show signup modal when 'Sign up here' is clicked
signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'none';
  signupModal.style.display = 'flex';
});

// Close signup modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
});

// Placeholder for signup form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;

  if (password === confirmPassword) {
    alert('Account created successfully! Please login.');
    signupModal.style.display = 'none';
    loginModal.style.display = 'flex';
  } else {
    alert('Passwords do not match. Please try again.');
  }
});

// Placeholder for Google login functionality
const googleLoginButton = document.querySelector('.google-login');
googleLoginButton.addEventListener('click', () => {
  alert('Redirecting to Google login...');
});


document.addEventListener("DOMContentLoaded", () => {
  const registeredUsers = []; // Simulated database for demonstration purposes

  // Login and Sign-up Modals
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");

  // Open Login Modal
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });

  // Open Sign-up Modal
  const signupLink = document.getElementById("signupLink");
  signupLink.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
  });

  // Close Modals
  const closeModalButtons = document.querySelectorAll(".close");
  closeModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      loginModal.style.display = "none";
      signupModal.style.display = "none";
    });
  });

  // Handle Login Form Submission
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert(`Welcome back, ${username}!`);
      loginModal.style.display = "none";
      loginForm.reset();
    } else {
      alert("Account not found. Please sign up.");
    }
  });

  // Handle Sign-up Form Submission
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById(
      "signupConfirmPassword"
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const existingUser = registeredUsers.find((user) => user.username === email);

    if (existingUser) {
      alert("An account with this email already exists. Please log in.");
    } else {
      registeredUsers.push({ username: email, password: password });
      alert("Account created successfully! Please log in.");
      signupModal.style.display = "none";
      signupForm.reset();
    }
  });

  // Close modals when clicking outside of modal content
  window.addEventListener("click", (event) => {
    if (event.target === loginModal || event.target === signupModal) {
      loginModal.style.display = "none";
      signupModal.style.display = "none";
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const registeredUsers = []; // Simulated user database

  // Login and Sign-up Modals
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");

  // Open Login Modal
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });

  // Open Sign-up Modal
  const signupLink = document.getElementById("signupLink");
  signupLink.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
  });

  // Close Modals
  const closeModalButtons = document.querySelectorAll(".close");
  closeModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      loginModal.style.display = "none";
      signupModal.style.display = "none";
    });
  });

  // Handle Login Form Submission
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert(`Welcome back, ${username}!`);
      loginModal.style.display = "none";
      loginForm.reset();
    } else {
      alert("Account not found. Please sign up.");
    }
  });

  // Handle Sign-up Form Submission with Validation
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById(
      "signupConfirmPassword"
    ).value.trim();

    // Validation Rules
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!containsUppercase(password) || !containsNumber(password)) {
      alert(
        "Password must contain at least one uppercase letter and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const existingUser = registeredUsers.find((user) => user.username === email);
    if (existingUser) {
      alert("An account with this email already exists. Please log in.");
      return;
    }

    // Successful account creation
    registeredUsers.push({ username: email, password: password });
    alert("Account created successfully! Please log in.");
    signupModal.style.display = "none";
    signupForm.reset();
  });

  // Close modals when clicking outside of modal content
  window.addEventListener("click", (event) => {
    if (event.target === loginModal || event.target === signupModal) {
      loginModal.style.display = "none";
      signupModal.style.display = "none";
    }
  });

  // Helper Functions for Validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  function containsNumber(str) {
    return /\d/.test(str);
  }
});


const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    alert(`Searching for: ${searchInput.value}`);
});

