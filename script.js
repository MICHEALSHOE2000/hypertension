// ========= Scroll-Based Animation =========
// Add class 'visible' when an element enters the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
  }
);
// ========= Countdown Timer =========
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
      minutes = String(Math.floor(timer / 60)).padStart(2, '0');
      seconds = String(timer % 60).padStart(2, '0');
      display.textContent = `00:${minutes}:${seconds}`;
      if (--timer < 0) timer = 0;
    }, 1000);
  }
  
  const countdownDisplay = document.getElementById('timer');
  if (countdownDisplay) {
    // Set countdown for 15 minutes
    startCountdown(15 * 60, countdownDisplay);
  }
  
// Apply to all elements with class 'animate'
document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
// ========= Basic Field Validation =========
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');

    if (!name.value.trim() || !phone.value.trim()) {
      e.preventDefault();
      alert("❌ Please fill in both your name and phone number.");
    }
  });
}

// ========= Form Submission Alert =========
// Show alert when form is submitted
document.querySelector('form')?.addEventListener('submit', (e) => {
  // Give user quick feedback
  setTimeout(() => {
    alert("✅ Your order has been received. We'll contact you shortly!");
  }, 100); // slight delay to not interrupt submission
});
// ========= FAQ Toggle =========
document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
