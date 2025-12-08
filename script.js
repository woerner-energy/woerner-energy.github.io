// Aktuelles Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      // Menü auf Mobil schließen
      nav.classList.remove('open');
    }
  });
});

// Intersection Observer für Fade-In-Effekt
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.observe').forEach(el => observer.observe(el));

// Mobiles Menü
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

/* -------------------------
   HERO SLIDER
------------------------- */
const slides = document.querySelectorAll(".slider img");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-Slide alle 5 Sekunden
let slideInterval = setInterval(nextSlide, 5000);

// Buttons
document.querySelector(".next")?.addEventListener("click", () => {
  nextSlide();
  clearInterval(slideInterval);
});

document.querySelector(".prev")?.addEventListener("click", () => {
  prevSlide();
  clearInterval(slideInterval);
});

// Horizontal scrollen per Mausrad für die Leistungs-Karten
const cardsGrid = document.querySelector('.cards-grid');

if (cardsGrid) {
  cardsGrid.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
      event.preventDefault();
      cardsGrid.scrollLeft += event.deltaY; // Mausrad -> horizontal scrollen
    }
  }, { passive: false });
}
