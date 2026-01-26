// ========================================
// Theme Toggle
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ========================================
// Cursor Trail Effect
// ========================================

const cursorTrail = document.getElementById('cursor-trail');
let lastTrailTime = 0;
const trailInterval = 50; // Milliseconds between trail dots

document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();

    if (currentTime - lastTrailTime > trailInterval) {
        createTrailDot(e.clientX, e.clientY);
        lastTrailTime = currentTime;
    }
});

function createTrailDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';

    // Randomize between cyan and magenta
    const colors = ['#00ffff', '#ff00ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    dot.style.background = color;
    dot.style.boxShadow = `0 0 10px ${color}`;

    cursorTrail.appendChild(dot);

    // Remove dot after animation completes
    setTimeout(() => {
        dot.remove();
    }, 800);
}

// ========================================
// Back to Top Button
// ========================================

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// ========================================
// Profile Image Click Effect (Optional)
// ========================================

const profileImage = document.querySelector('.profile-image');

profileImage.addEventListener('click', () => {
    // Add a fun bounce animation
    profileImage.style.animation = 'none';
    setTimeout(() => {
        profileImage.style.animation = 'rotate 10s linear infinite';
    }, 10);

    // Create confetti-like effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const x = profileImage.offsetLeft + profileImage.offsetWidth / 2;
            const y = profileImage.offsetTop + profileImage.offsetHeight / 2;
            createConfetti(x, y);
        }, i * 30);
    }
});

function createConfetti(x, y) {
    const confetti = document.createElement('div');
    confetti.className = 'trail-dot';

    const colors = ['#00ffff', '#ff00ff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * Math.PI * 2;
    const velocity = 2 + Math.random() * 3;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.background = color;
    confetti.style.boxShadow = `0 0 10px ${color}`;
    confetti.style.width = '6px';
    confetti.style.height = '6px';

    document.body.appendChild(confetti);

    let posX = x;
    let posY = y;
    let currentVy = vy;

    const animateConfetti = () => {
        posX += vx;
        posY += currentVy;
        currentVy += 0.1; // Gravity

        confetti.style.left = posX + 'px';
        confetti.style.top = posY + 'px';

        if (posY < window.innerHeight + 100) {
            requestAnimationFrame(animateConfetti);
        } else {
            confetti.remove();
        }
    };

    animateConfetti();
}

// ========================================
// Initialize
// ========================================

console.log('%c👋 Welcome to my website!', 'font-size: 20px; color: #00ffff; font-weight: bold;');
console.log('%cBuilt with passion and code 💻', 'font-size: 14px; color: #ff00ff;');
