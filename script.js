const backgroundAudio = document.getElementById('background-audio');
const iconContainer = document.querySelector('.icon-container');
const typewriterText = document.getElementById('typewriter-text');
const floatingMessage = document.getElementById('floating-message');
const message = "It feels so different without you, like a sky missing its stars, quiet, empty, and longing for your light. If only I could send a thousand kisses through the wind to reach you, wrapping you in all my love and warmth. Every heartbeat whispers your name, and every thought of you brings a smile and a longing to be right there with you. I can't wait to see you again.";

let gradientIndex = 0;
const gradients = [
  'linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb)',
  'linear-gradient(45deg, #ff6b6b, #ff4757, #ff7f50)',
  'linear-gradient(45deg, #eccc68, #ffa502, #ff7f50)',
  'linear-gradient(45deg, #fbc2eb, #ff9a9e, #fad0c4)'
];

// Typewriter effect
let charIndex = 0;
function typeWriter() {
  if (charIndex < message.length) {
    typewriterText.textContent += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50); 
  }
}

// Generate random emojis with random colors
function generateEmojis() {
  const emojis = ['❤️', '😘'];
  const colors = ['#ff6b6b', '#ff4757', '#ff7f50', '#ffa502', '#eccc68'];
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('icon');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.top = `${Math.random() * 100}%`;
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${Math.random() * 30 + 20}px`;
    emoji.style.color = colors[Math.floor(Math.random() * colors.length)];
    emoji.style.animationDuration = `${Math.random() * 10 + 5}s`;
    iconContainer.appendChild(emoji);
  }
}

// Confetti explosion
function explodeConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// Show floating message
function showFloatingMessage() {
  floatingMessage.style.display = 'block';
  setTimeout(() => {
    floatingMessage.style.display = 'none';
  }, 2000); // Hide after 2 seconds
}

// Change background gradient dynamically
function changeBackground() {
  document.body.style.background = gradients[gradientIndex];
  gradientIndex = (gradientIndex + 1) % gradients.length;
}

// Heart trail effect
document.addEventListener('mousemove', (e) => {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000); 
});

// Button click handler
function sendLove() {
  changeBackground();
  backgroundAudio.play();
  generateEmojis();
  explodeConfetti();
  showFloatingMessage();
}

// Smooth scroll to message
window.onload = () => {
  document.querySelector('.text-container').scrollIntoView({ behavior: 'smooth' });
  typeWriter();
  generateEmojis();
};