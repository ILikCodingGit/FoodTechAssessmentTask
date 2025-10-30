// zoom go brrr
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-content");
  const scrollY = window.scrollY;
  if (scrollY > 50) hero.classList.add("shrink");
  else hero.classList.remove("shrink");
});
