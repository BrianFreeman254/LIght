const pin = "2005"; 
const messages = [
    "Happy Valentine’s Day, my love! 💖",
    "Every heartbeat of mine whispers your name. ❤️",
    "No gift could ever match the love I have for you. 🎁💫",
    "If love had a scent, it would be the way your presence feels. 🌹",
    "In your arms, I’ve found my forever. 💑",
    "You're not just my love; you are my heart’s only rhythm. 🎶",
    "No matter what tomorrow holds, my love for you will never fade. 💕",
    "This Valentine’s, I just want you to know—you are my greatest blessing. 💘"
];

let currentMessage = 0;

// Verify PIN
function verifyPin() {
  const pinInput = document.getElementById("pin").value;
  if (pinInput === pin) {
    document.querySelector(".pin-container").style.display = "none";
    document.getElementById("card").style.display = "block";
    document.getElementById("bg-music").play();
    showNextMessage();
    startHearts();
  } else {
    document.getElementById("wrong-pin").style.display = "block";
  }
}

// Show Messages
function showNextMessage() {
  if (currentMessage < messages.length) {
    document.getElementById("message").textContent = messages[currentMessage];
    currentMessage++;
  }
}

// Auto-update Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Keyboard "Enter" Support
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const pinInput = document.getElementById("pin");
    if (pinInput && pinInput === document.activeElement) {
      verifyPin(); // If PIN input is focused, verify PIN
    } else {
      showNextMessage(); // Otherwise, reveal next message
    }
  }
});

// Floating Hearts Animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);
}
