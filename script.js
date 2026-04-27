/* =============================================
   ADITYA MISHRA PORTFOLIO — JAVASCRIPT
   IBM Industry Immersion Program 2025
   ============================================= */

// ============ LOADING SCREEN ============
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen?.classList.add('hidden');
  }, 1500);
});

// ============ CUSTOM CURSOR ============
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

if (cursorDot && cursorOutline) {
  document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
  });

  // Add hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .feat-card, .proj-card, .tech-card, .badge-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot?.classList.add('hover');
      cursorOutline?.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorDot?.classList.remove('hover');
      cursorOutline?.classList.remove('hover');
    });
  });
}

// ============ SCROLL TO TOP BUTTON ============
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn?.classList.add('visible');
  } else {
    scrollTopBtn?.classList.remove('visible');
  }
});

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

// ============ THEME TOGGLE ============
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeBtn?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  if (themeIcon) themeIcon.textContent = next === 'dark' ? '🌙' : '☀️';
});

// ============ TYPEWRITER EFFECT ============
const typewriterEl = document.getElementById('typewriter');
const phrases = [
  'Full-Stack Developer',
  'BCA Student',
  'Web Designer',
  'Problem Solver',
  'Tech Enthusiast'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeDelay = 100;

function typeWrite() {
  if (!typewriterEl) return;
  const current = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typeDelay = 50;
  } else {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typeDelay = 100;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    typeDelay = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeDelay = 500;
  }

  setTimeout(typeWrite, typeDelay);
}

if (typewriterEl) setTimeout(typeWrite, 1000);

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============ COUNTER ANIMATION ============
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
      return;
    }
    el.textContent = Math.floor(start);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => {
        animateCounter(el, parseInt(el.getAttribute('data-target')));
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-bar, .stats-grid').forEach(el => counterObserver.observe(el));

// ============ SKILL BAR ANIMATION ============
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const target = bar.getAttribute('data-w');
        bar.style.width = target + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-layout, .skill-bars-col').forEach(el => {
  if (el) skillObserver.observe(el);
});

// ============ SOFT SKILL RINGS ============
const softObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.ring-fill').forEach(ring => {
        const pct = parseInt(ring.getAttribute('data-pct'));
        const circumference = 251.2;
        const offset = circumference - (pct / 100) * circumference;
        ring.style.strokeDashoffset = offset;
      });
      softObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.soft-skills-grid').forEach(el => {
  if (el) softObserver.observe(el);
});

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate send (replace with real backend/EmailJS/Formspree)
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    contactForm.reset();
    formSuccess?.classList.add('show');
    setTimeout(() => formSuccess?.classList.remove('show'), 5000);
  }, 1500);
});

// ============ PARTICLE CANVAS ============
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 80;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      const theme = document.documentElement.getAttribute('data-theme');
      const color = theme === 'dark' ? 'rgba(197,160,89,0.3)' : 'rgba(168,134,68,0.4)';
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const theme = document.documentElement.getAttribute('data-theme');
          const opacity = (1 - dist / 120) * 0.2;
          ctx.strokeStyle = theme === 'dark' 
            ? `rgba(197,160,89,${opacity})` 
            : `rgba(168,134,68,${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============ PROJECT CARD MOBILE FLIP ============
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => {
    if (window.matchMedia('(hover: none)').matches) {
      card.classList.toggle('flipped');
      const inner = card.querySelector('.proj-card-inner');
      if (inner) {
        inner.style.transform = card.classList.contains('flipped') 
          ? 'rotateY(180deg)' 
          : '';
      }
    }
  });
});

console.log('%c ADITYA MISHRA PORTFOLIO ', 'background:linear-gradient(135deg,#c5a059,#a88644);color:#0a0a0f;font-size:16px;padding:8px 16px;border-radius:6px;font-weight:bold;');
console.log('%c IBM Industry Immersion Program 2025 ', 'color:#c5a059;font-size:12px;font-weight:600;');
console.log('%c Built with HTML · CSS · JavaScript ', 'color:#9999b8;font-size:11px;');
