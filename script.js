// Smooth fade-in effect for sections when scrolling
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on page load

// Highlight active nav link while scrolling
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Small greeting when clicking the profile image
const profileImg = document.querySelector(".img");
profileImg.addEventListener("click", () => {
  alert("👋 Hi, I’m Krinal! Welcome to my portfolio 🚀");
});
