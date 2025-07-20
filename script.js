// Scroll ke bagian tertentu dengan animasi halus
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Animasi muncul saat scroll dengan debounce untuk performa
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(() => {
  const elements = document.querySelectorAll('.animate');
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}));

// Toggle menu (untuk tampilan mobile)
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Tutup menu saat link diklik (khusus mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Form kontak - kirim ke WhatsApp
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = encodeURIComponent(form.querySelector('input[type="text"]').value.trim());
    const email = encodeURIComponent(form.querySelector('input[type="email"]').value.trim());
    const message = encodeURIComponent(form.querySelector('textarea').value.trim());

    if (!name || !email || !message) {
      alert('Mohon isi semua field terlebih dahulu.');
      return;
    }

    const phoneNumber = '6285732162064'; // Gunakan format internasional
    const waMessage = `Halo Dzaki,%0A%0ASaya ingin menghubungi Anda dengan detail berikut:%0A- Nama: ${name}%0A- Email: ${email}%0A- Pesan: ${message}`;
    const waURL = `https://wa.me/${phoneNumber}?text=${waMessage}`;

    window.open(waURL, '_blank');

    form.reset();
    if (successMsg) {
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 3000);
    }
  });
}
