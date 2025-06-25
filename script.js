
document.addEventListener("DOMContentLoaded", () => {
  // Placeholder for any interactive elements
});


// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Collapsible content toggling
document.querySelectorAll('.collapsible-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('open');
    button.textContent = content.classList.contains('open') ? "Read Less" : "Read More";
  });
});

function toggleAccordion(btn) {
  const body = btn.nextElementSibling;
  body.style.display = (body.style.display === "block") ? "none" : "block";
}

function enterUniverse() {
  const overlay = document.getElementById("landing-overlay");
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);
  const audio = document.querySelector("audio");
  if (audio) {
    audio.volume = 0.5;
    audio.play();
  }
  document.getElementById("philosophy").scrollIntoView({ behavior: "smooth" });
}



// Background music toggle
const audio = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
if (toggleBtn && audio) {
  toggleBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.textContent = '🔊 Music On';
    } else {
      audio.pause();
      toggleBtn.textContent = '🔇 Music Off';
    }
  });
}
