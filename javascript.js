// =========================
// EFFETS GLOBAUX SITE
// =========================

// 1. Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 2. Navbar effet au scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#ffffff";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "1000";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }
});

// 3. Animation apparition au scroll
const elements = document.querySelectorAll(
  ".hero, .card, .feature-card, .service-box, .description-container",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 },
);

elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// 4. Petit effet hover dynamique sur cartes (JS complémentaire)
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `scale(1.05) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
