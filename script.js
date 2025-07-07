// Scroll ke bagian tertentu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Reveal on scroll effect
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.animate');
  const triggerBottom = window.innerHeight * 0.8;

  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
});

// Efek submit form tanpa reload
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  successMsg.style.display = 'block';

  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
});
