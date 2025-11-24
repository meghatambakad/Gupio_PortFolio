// Mobile menu
const burger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', (!expanded).toString());
  links.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('show'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const typingEl = document.querySelector('.typing');
typingEl.addEventListener('animationend', (e) => {
  if (e.animationName === 'typing') {
    typingEl.classList.add('done'); 
  }
});

const aboutElements = document.querySelectorAll('.about-container, .about-img, .about-text-col');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

aboutElements.forEach(el => observer.observe(el));



// dark mode

const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = "☀️"; 
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = "☀️";
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem('theme', 'light');
  }
});
