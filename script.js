/* =============================================
   ADITYA MISHRA PORTFOLIO — JAVASCRIPT
   IBM Industry Immersion Program 2026
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
console.log('%c IBM Industry Immersion Program 2026 ', 'color:#c5a059;font-size:12px;font-weight:600;');
console.log('%c Built with HTML · CSS · JavaScript ', 'color:#9999b8;font-size:11px;');

// ============ JARVIS AI CHATBOT ============
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotMinimize = document.getElementById('chatbotMinimize');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotTyping = document.getElementById('chatbotTyping');

// Portfolio context for AI
const portfolioContext = `You are J.A.R.V.I.S. (Just A Rather Very Intelligent System), an AI assistant for Aditya Mishra's portfolio. 

About Aditya:
- Name: Aditya Mishra
- Student ID: 251017002101
- University: Techno India University, Kolkata
- Program: Bachelor of Computer Applications (BCA) - SOF 1B (2026-2029)
- Email: adityamishra5681@gmail.com
- LinkedIn: linkedin.com/in/aditya-mishra-62041a37a
- GitHub: github.com/adityamishra5681
- IBM Industry Immersion Program 2026 Participant (BCA Web Development Track)

Skills: HTML5, CSS3, JavaScript, React, Node.js, Git/GitHub, Responsive Design, Problem Solving

Projects:
1. Weather App - Real-time weather using OpenWeatherMap API
2. Token Farming Platform - Blockchain-inspired UI
3. This Avengers-themed Portfolio - 20+ animations, AI chatbot, dark/light mode

Education:
- BCA at Techno India University (2026-2029)
- Class XII - CBSE (2023-2025)
- Class X - ICSE

When answering questions about Aditya, use this information. For other questions, answer naturally and helpfully like Tony Stark's JARVIS would.`;

// Toggle chatbot
chatbotToggle?.addEventListener('click', () => {
  chatbotContainer?.classList.toggle('active');
  if (chatbotContainer?.classList.contains('minimized')) {
    chatbotContainer?.classList.remove('minimized');
  }
});

// Minimize chatbot
chatbotMinimize?.addEventListener('click', () => {
  chatbotContainer?.classList.toggle('minimized');
});

// Close chatbot
chatbotClose?.addEventListener('click', () => {
  chatbotContainer?.classList.remove('active');
  chatbotContainer?.classList.remove('minimized');
});

// Quick action buttons
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('quick-btn')) {
    const question = e.target.getAttribute('data-question');
    if (question) {
      sendMessage(question);
    }
  }
});

// Send message
function sendMessage(text = null) {
  const message = text || chatbotInput?.value.trim();
  if (!message) return;

  // Add user message
  addMessage(message, 'user');
  
  // Clear input
  if (chatbotInput) chatbotInput.value = '';

  // Show typing indicator
  if (chatbotTyping) chatbotTyping.style.display = 'flex';

  // Get AI response
  getAIResponse(message);
}

// Get AI response using multiple free APIs
async function getAIResponse(message) {
  try {
    // Try Hugging Face API first
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `${portfolioContext}\n\nUser: ${message}\nJ.A.R.V.I.S.:`,
        parameters: {
          max_length: 200,
          temperature: 0.7,
          top_p: 0.9,
        }
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (chatbotTyping) chatbotTyping.style.display = 'none';
      
      let aiResponse = data[0]?.generated_text || data.generated_text || '';
      
      // Clean up the response
      if (aiResponse.includes('J.A.R.V.I.S.:')) {
        aiResponse = aiResponse.split('J.A.R.V.I.S.:').pop().trim();
      }
      if (aiResponse.includes('User:')) {
        aiResponse = aiResponse.split('User:')[0].trim();
      }
      
      // If response is empty or too short, use fallback
      if (!aiResponse || aiResponse.length < 10) {
        throw new Error('Empty response');
      }
      
      addMessage(aiResponse, 'bot');
    } else {
      throw new Error('API error');
    }
  } catch (error) {
    // Fallback to local AI if API fails
    if (chatbotTyping) chatbotTyping.style.display = 'none';
    const fallbackResponse = getLocalAIResponse(message);
    addMessage(fallbackResponse, 'bot');
  }
}

// Local AI fallback with enhanced responses
function getLocalAIResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Greetings
  if (lowerMessage.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
    const greetings = [
      "Good day! I am J.A.R.V.I.S., Aditya's AI assistant. How may I help you today?",
      "Greetings! J.A.R.V.I.S. at your service. What would you like to know?",
      "Hello! I'm here to assist you with any questions about Aditya or anything else you'd like to discuss.",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // About Aditya
  if (lowerMessage.match(/\b(about|who|introduce|tell me about)\b/) && lowerMessage.match(/\b(aditya|him|student)\b/)) {
    return "Aditya Mishra is a passionate BCA student at Techno India University (SOF 1B), Student ID: 251017002101. He's participating in the IBM Industry Immersion Program 2026 and specializes in web development. He's skilled in HTML5, CSS3, JavaScript, React, and Node.js, with a strong focus on creating modern, responsive applications.";
  }

  // Skills
  if (lowerMessage.match(/\b(skill|technology|tech|stack|know|programming|code)\b/)) {
    return "Aditya is proficient in HTML5, CSS3, JavaScript, React, Node.js, Git/GitHub, and responsive design. He excels at creating modern web applications with advanced animations and user experiences. His portfolio itself demonstrates his mastery of front-end technologies with 20+ custom animations and AI integration.";
  }

  // Projects
  if (lowerMessage.match(/\b(project|work|built|created|portfolio|app)\b/)) {
    return "Aditya has built several impressive projects: 1) Weather App - A real-time weather application using OpenWeatherMap API with search functionality. 2) Token Farming Platform - A blockchain-inspired UI for token staking and management. 3) This Avengers-themed Portfolio - Featuring 20+ animations, AI chatbot, dark/light mode, and modern design. Check out his GitHub at github.com/adityamishra5681 for more!";
  }

  // Education
  if (lowerMessage.match(/\b(education|study|university|college|degree|school)\b/)) {
    return "Aditya is currently pursuing Bachelor of Computer Applications (BCA) at Techno India University (2026-2029), SOF 1B. He completed Class XII from CBSE board (2023-2025) and Class X from ICSE board. He's also a participant in the IBM Industry Immersion Program 2026, focusing on web development.";
  }

  // Contact
  if (lowerMessage.match(/\b(contact|email|reach|connect|linkedin|github|social)\b/)) {
    return "You can reach Aditya through multiple channels: 📧 Email: adityamishra5681@gmail.com | 💼 LinkedIn: linkedin.com/in/aditya-mishra-62041a37a | 💻 GitHub: github.com/adityamishra5681. He's always open to collaboration and networking opportunities!";
  }

  // IBM Program
  if (lowerMessage.match(/\b(ibm|immersion|program|industry)\b/)) {
    return "Aditya is a proud participant of the IBM Industry Immersion Program 2026, focusing on the BCA Web Development Track. This prestigious program provides hands-on experience with modern web technologies, cloud computing fundamentals, and industry-grade project building, preparing students for real-world software development careers.";
  }

  // Portfolio features
  if (lowerMessage.match(/\b(feature|animation|design|theme|avengers|website)\b/)) {
    return "This Avengers-themed portfolio is packed with features: ⚡ 20+ custom animations | 🎨 Dark/Light mode | 🖱️ Custom cursor | 🎬 Loading screen | 🏆 Achievement badges | 💬 AI chatbot (that's me!) | 🎴 3D flip cards | ⭐ Testimonials | 📱 Fully responsive. Built with pure HTML, CSS, and JavaScript - no frameworks!";
  }

  // Experience
  if (lowerMessage.match(/\b(experience|work|job|internship|career)\b/)) {
    return "Aditya is currently focused on his studies and building impressive projects to gain practical experience. He's actively seeking internship opportunities to apply his skills in real-world scenarios. His participation in the IBM Industry Immersion Program 2026 demonstrates his commitment to professional growth and industry readiness.";
  }

  // Hire/Availability
  if (lowerMessage.match(/\b(hire|available|opportunity|recruit|position)\b/)) {
    return "Aditya is available for internships, freelance projects, and collaborative opportunities! He's passionate about web development and eager to contribute to innovative teams. His skills in modern web technologies and problem-solving make him a valuable addition to any project. Contact him at adityamishra5681@gmail.com to discuss opportunities.";
  }

  // General programming questions
  if (lowerMessage.match(/\b(what is|how to|explain|define|difference between)\b/)) {
    return "That's an interesting question! While I'm primarily designed to help you learn about Aditya, I can try to help. For detailed technical questions, I recommend checking out resources like MDN Web Docs, Stack Overflow, or W3Schools. Is there anything specific about Aditya's skills or projects you'd like to know?";
  }

  // Weather/Time
  if (lowerMessage.match(/\b(weather|temperature|forecast)\b/)) {
    return "Speaking of weather, Aditya built a Weather App that fetches real-time weather data using the OpenWeatherMap API! You can check it out on his GitHub. As for current weather, I'd need to access external APIs for that. Is there anything else I can help you with?";
  }

  // AI/Technology questions
  if (lowerMessage.match(/\b(ai|artificial intelligence|machine learning|chatbot)\b/)) {
    return "Ah, discussing AI with an AI - how meta! I'm J.A.R.V.I.S., built to assist visitors on Aditya's portfolio. I use natural language processing to understand your questions and provide helpful responses. Aditya integrated me to showcase his skills in creating interactive web experiences. Pretty cool, right?";
  }

  // Thanks
  if (lowerMessage.match(/\b(thank|thanks|appreciate|grateful)\b/)) {
    return "You're most welcome! It's my pleasure to assist. Is there anything else you'd like to know about Aditya or his work?";
  }

  // Goodbye
  if (lowerMessage.match(/\b(bye|goodbye|see you|later)\b/)) {
    return "Farewell! Feel free to return anytime you have questions. Have a great day!";
  }

  // Help
  if (lowerMessage.match(/\b(help|what can you|capabilities)\b/)) {
    return "I can help you with information about: 🎓 Aditya's education and background | 💻 His technical skills and expertise | 🚀 Projects he's built | 📧 Contact information | 💼 IBM program details | ✨ Portfolio features. I can also chat about general topics! What would you like to know?";
  }

  // Default intelligent response
  const defaultResponses = [
    "That's an interesting question! While I'm primarily here to help you learn about Aditya Mishra and his work, I'm happy to chat. Could you tell me more about what you're looking for?",
    "I'm J.A.R.V.I.S., Aditya's AI assistant. I specialize in answering questions about his skills, projects, and background. However, I'm also here to help with general inquiries. How can I assist you today?",
    "Interesting query! I'm designed to provide information about Aditya's portfolio, but I can try to help with other topics too. What specifically would you like to know?",
    "I appreciate your question! While my expertise is in Aditya's work and achievements, I'm equipped to discuss various topics. Could you elaborate on what you're interested in?",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Add message to chat
function addMessage(text, type) {
  if (!chatbotMessages) return;

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}-message`;
  
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = type === 'bot' ? '🤖' : '👤';
  
  const content = document.createElement('div');
  content.className = 'message-content';
  
  const p = document.createElement('p');
  p.textContent = text;
  
  content.appendChild(p);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);
  
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Send on Enter key
chatbotInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Send button click
chatbotSend?.addEventListener('click', () => {
  sendMessage();
});

