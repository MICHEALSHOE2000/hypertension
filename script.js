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

  // === Testimonial Slider for Hypertension Cure ===
  const testimonials = [
    {
      text: "“My blood pressure dropped from 160/100 to 120/80 within 3 weeks of using this product.”",
      name: "Oluwabunmi, Port Harcourt"
    },
    {
      text: "“I’ve stopped taking my regular BP meds since I started this. It’s been 5 months and I feel great!”",
      name: "Danladi, Kaduna"
    },
    {
      text: "“I didn’t think natural remedies could work this well. My doctor was surprised too.”",
      name: "Ngozi, Owerri"
    }
  ];

  let currentTestimonial = 0;
  const testimonialSection = document.getElementById("testimonials");

  function updateTestimonial() {
    testimonialSection.innerHTML = `
      <h2>What Others Are Saying</h2>
      <blockquote>
        <p>${testimonials[currentTestimonial].text}</p>
        <cite>— ${testimonials[currentTestimonial].name}</cite>
      </blockquote>
    `;
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }

  updateTestimonial();
  setInterval(updateTestimonial, 10000); // Change every 10s

  // === Fake Order Notification (Top-Right) ===
  const fakeOrders = [
    "Femi from Lagos just ordered the hypertension combo pack!",
    "Aisha from Kano bought 2-month supply!",
    "Chisom from Onitsha reordered after results!",
    "Mrs. Ade from Abuja placed her second order!",
    "Tunde from Ibadan just paid for express delivery!"
  ];

  const popup = document.getElementById('fake-order-popup');

  function showFakeOrder() {
    popup.textContent = fakeOrders[Math.floor(Math.random() * fakeOrders.length)];
    popup.style.opacity = '1';
    setTimeout(() => {
      popup.style.opacity = '0';
    }, 5000);
  }

  setInterval(showFakeOrder, 25000); // Every 25 seconds

  // === Fake Comment Submit ===
  const sendBtn = document.getElementById('send-comment');
  const input = document.getElementById('comment-input');
  const toast = document.getElementById('comment-toast');

  if (sendBtn && input && toast) {
    sendBtn.addEventListener('click', () => {
      if (input.value.trim() !== '') {
        toast.style.display = 'block';
        input.value = '';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000);
      }
    });
  }
