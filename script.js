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

