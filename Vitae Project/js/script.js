// =========================================================
// Vitae — interactivity: featured carousel + mobile nav
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initMobileNav();
});

function initCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dotsWrap = carousel.querySelector("[data-dots]");
  const prevBtn = carousel.querySelector("[data-prev]");
  const nextBtn = carousel.querySelector("[data-next]");

  if (!slides.length) return;

  let current = 0;

  // Build dots dynamically based on number of slides
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function render() {
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    Array.from(dotsWrap.children).forEach((dot, i) =>
      dot.classList.toggle("is-active", i === current)
    );
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    render();
  }

  prevBtn?.addEventListener("click", () => goTo(current - 1));
  nextBtn?.addEventListener("click", () => goTo(current + 1));

  render();

  // Optional: auto-advance every 6s, pausing on hover
  let timer = setInterval(() => goTo(current + 1), 6000);
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", () => {
    timer = setInterval(() => goTo(current + 1), 6000);
  });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
