// 1. Reveal sections on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// 2. Toggle Digital Resume Modal (The "New Page" effect)
function toggleResume() {
    const resume = document.getElementById('resumePage');
    if (resume) {
        if (resume.classList.contains('active')) {
            resume.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable background scroll
        } else {
            resume.classList.add('active');
            document.body.style.overflow = 'hidden'; // Disable background scroll
        }
    }
}

// 3. Smooth scrolling for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 4. Functional "Let's Talk" Button
const navTalkBtn = document.querySelector('.btn-nav-talk');
if(navTalkBtn) {
    navTalkBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// 5. Form Submission Cue
const form = document.querySelector('.contact-form');
if(form) {
    form.onsubmit = (e) => {
        // Formspree handles the actual POST, we just show a message
        setTimeout(() => {
            alert("Thanks! Your message has been sent to Ashish.");
        }, 500);
    };
}

// Event Listeners
window.addEventListener("scroll", reveal);

// Initial check on load
document.addEventListener("DOMContentLoaded", () => {
    reveal();
});