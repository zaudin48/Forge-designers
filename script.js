// js/project.js

// --- Project Dynamic Loader ---
const param = new URLSearchParams(window.location.search);
const project_id = param.get("id");

if (project_id && projectData[project_id]) {
  const data = projectData[project_id];

  document.getElementById("project-title").textContent = data.title;
  document.getElementById("project-description").textContent = data.description;

  const imageContainer = document.getElementById("project-images");
  imageContainer.innerHTML = "";

  data.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = data.title;
    img.style.width = "200px";
    img.style.margin = "10px";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    imageContainer.appendChild(img);
  });
} else {
  document.getElementById("project-content").innerHTML = "<h2>Project not found</h2>";
}

// --- Contact Form Handler ---
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "✅ Message sent successfully!";
  this.reset();
});

// --- Auto Horizontal Scroll for Project Grid ---
/* const wrapper = document.querySelector('.project-grid'); */
let scrollAmount = 0;
const scrollStep = 260; // Adjust based on card size
const delay = 4000;
let autoScroll;

function startAutoScroll() {
  autoScroll = setInterval(() => {
    scrollAmount += scrollStep;

    if (scrollAmount + wrapper.clientWidth >= wrapper.scrollWidth) {
      scrollAmount = 0;
      wrapper.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      wrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  }, delay);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

startAutoScroll();

wrapper.addEventListener('mouseenter', stopAutoScroll);
wrapper.addEventListener('mouseleave', startAutoScroll);
const navLinks = document.querySelectorAll('.mobile-nav .nav-item');

navLinks.forEach(link => {
  if (link.getAttribute('href') === window.location.hash) {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }
});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


function getBackgroundColorBrightness(el) {
  const style = window.getComputedStyle(el);
  const bgColor = style.backgroundColor;

  // Extract RGB values
  const rgb = bgColor.match(/\d+/g);
  if (!rgb) return 255; // fallback to white

  const [r, g, b] = rgb.map(Number);

  // Use luminance formula to determine brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness;
}

function invertTextColorBasedOnBackground() {
  const target = document.querySelector(".navbar"); // or any container
  const logoText = document.querySelector(".logo-text");
  const navLinks = document.querySelectorAll(".nav-links a");

  const brightness = getBackgroundColorBrightness(target);

  if (brightness > 180) {
    // Light background → dark text
    logoText.style.color = "#111";
    logoText.querySelector("span").style.color = "#11516c";
    navLinks.forEach((link) => (link.style.color = "#111"));
  } else {
    // Dark background → white text
    logoText.style.color = "#fff";
    logoText.querySelector("span").style.color = "#57b7e5"; // or white
    navLinks.forEach((link) => (link.style.color = "#fff"));
  }
}

// Trigger on scroll (or resize if needed)
window.addEventListener("scroll", invertTextColorBasedOnBackground);
window.addEventListener("load", invertTextColorBasedOnBackground);


let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Scrolling down — hide navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up — show navbar
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll;
});
