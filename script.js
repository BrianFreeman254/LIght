document.addEventListener("DOMContentLoaded", function () {
    const pinScreen = document.getElementById("pin-screen");
    const mainContent = document.getElementById("main-content");
    const pinInput = document.getElementById("pin-input");
    const pinSubmit = document.getElementById("pin-submit");
    const pinError = document.getElementById("pin-error");
    const correctPin = "2005";

    // PIN validation
    pinSubmit.addEventListener("click", function () {
        if (pinInput.value === correctPin) {
            pinScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");
            document.getElementById("bg-music").play();
            generateHearts();
        } else {
            pinError.textContent = "Incorrect PIN. Try again!";
        }
    });

    // Dynamic copyright year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Love messages
    const messages = [
        "Happy Valentine's, Sharlyn! 💕 You are my greatest love! 😘",
        "Every moment with you is magic! ✨",
        "You are my heart's greatest treasure! ❤️",
        "Loving you is the best thing I've ever done. 💖",
        "I choose you, always and forever! 💑"
    ];
    let msgIndex = 0;
    document.getElementById("nextMessage").addEventListener("click", function () {
        msgIndex = (msgIndex + 1) % messages.length;
        document.getElementById("message").textContent = messages[msgIndex];
    });

    // Floating hearts
    function generateHearts() {
        const heartContainer = document.querySelector(".hearts");
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heartContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 500);
    }
});
