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
  const contentEl = document.getElementById("project-content");
if (contentEl) {
  contentEl.innerHTML = "<h2>Project not found</h2>";
}

}

// --- Contact Form Handler ---
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "✅ Message sent successfully!";
  this.reset();
});

// --- Auto Horizontal Scroll for Project Grid ---
/* const wrapper = document.querySelector('.project-grid'); */
/* let scrollAmount = 0;
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
 */

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


  VanillaTilt.init(document.querySelectorAll(".service-card"), {
    max: 8,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('main-header');
            let lastScroll = 0;
            const scrollThreshold = 100; // Pixels to scroll before hiding
            
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                // At top of page - always show
                if (currentScroll <= 0) {
                    navbar.classList.remove('navbar-hidden');
                    return;
                }
                
                // Scrolling down - hide
                if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
                    navbar.classList.add('navbar-hidden');
                } 
                // Scrolling up - show
                else if (currentScroll < lastScroll) {
                    navbar.classList.remove('navbar-hidden');
                }
                
                lastScroll = currentScroll;
            });
            
            // Logo hover effect
            const logo = document.querySelector('.logo-header');
            logo.addEventListener('mouseenter', () => {
                document.querySelector('.logo-img').style.transform = 'rotate(-10deg)';
            });
            logo.addEventListener('mouseleave', () => {
                document.querySelector('.logo-img').style.transform = 'rotate(0)';
            });
        });