// nav blur
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// hero shrink
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-content");
  hero.classList.toggle("shrink", window.scrollY > 50);
});

// scroll fade
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
