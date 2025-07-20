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

// Handle form submit supaya buka WhatsApp dan tidak reload
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = encodeURIComponent(form.querySelector('input[type="text"]').value.trim());
  const email = encodeURIComponent(form.querySelector('input[type="email"]').value.trim());
  const message = encodeURIComponent(form.querySelector('textarea').value.trim());

  if (!name || !email || !message) {
    alert('Mohon isi semua field terlebih dahulu.');
    return;
  }

  const phoneNumber = '085732162064'; // Ganti nomor WA kamu di sini
  const text = `Halo Dzaki,%0A%0ASaya ingin menghubungi Anda dengan detail berikut:%0A- Nama: ${name}%0A- Email: ${email}%0A- Pesan: ${message}`;

  const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(waUrl, '_blank');

  form.reset();
  successMsg.style.display = 'block';

  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
});
