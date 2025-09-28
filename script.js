// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));

// Smooth Scroll for Menu Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
  });
});
