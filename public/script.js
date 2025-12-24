// Name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Friend";
document.getElementById("username").innerText = name;

// Countdown
function updateCountdown() {
  const now = new Date();
  const year =
    now.getMonth() === 11 && now.getDate() > 25
      ? now.getFullYear() + 1
      : now.getFullYear();

  const christmas = new Date(`December 25, ${year} 00:00:00`);
  const diff = christmas - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `🎁 ${d} Days ${h} Hours ${m} Minutes to Christmas`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Music
// function toggleMusic() {
//   const music = document.getElementById("music");
//   music.volume = 0.4;
//   music.paused ? music.play() : music.pause();
// }
//updated music
function toggleMusic() {
  const music = document.getElementById("music");

  if (music.paused) {
    music.play();
    localStorage.setItem("musicPlaying", "true");
  } else {
    music.pause();
    localStorage.setItem("musicPlaying", "false");
  }

  // Save current time
  localStorage.setItem("musicTime", music.currentTime);
}
window.addEventListener("load", () => {
  const music = document.getElementById("music");
  if (!music) return;

  const wasPlaying = localStorage.getItem("musicPlaying");
  const savedTime = localStorage.getItem("musicTime");

  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  if (wasPlaying === "true") {
    // Small delay to satisfy browser autoplay rules
    setTimeout(() => {
      music.play().catch(() => {});
    }, 300);
  }
});

// Info
function toggleInfo() {
  document.getElementById("info").classList.toggle("hidden");
}

// Santa Calling Animation

// 🎅 Santa Blessings List
const santaBlessings = [
  "May your heart always be kind and your dreams always be big ✨",
  "May joy, peace, and love follow you wherever you go 🎄",
  "Never stop believing in magic — especially the magic inside you 🌟",
  "May your days be filled with laughter and warm memories ❄️",
  "Be brave, be honest, and always help others ❤️",
  "May Santa bring you happiness not just today, but every day 🎁",
  "You are loved more than you know, my dear child 🤍"
];
function callFromSanta() {
  const box = document.getElementById("santa-call");

  // Pick random blessing
  const randomBlessing =
    santaBlessings[Math.floor(Math.random() * santaBlessings.length)];

  // Personalize with name
  box.innerText = `🎅 ${randomBlessing}`;

  box.classList.remove("hidden");

  // Auto hide after 4 seconds
  setTimeout(() => {
    box.classList.add("hidden");
  }, 6000);
}

// function callFromSanta() {
//   const box = document.getElementById("santa-call");
//   box.innerText = `🎅 You are loved more than you know, my dear child., ${name} 🎄`;
//   box.classList.remove("hidden");

//   setTimeout(() => {
//     box.classList.add("hidden");
//   }, 4000);
// }

// Falling Name
setInterval(() => {
  const span = document.createElement("span");
  span.className = "falling-name";
  span.innerText = `🎄 Merry Christmas, ${name} 🎅`;
  span.style.left = Math.random() * 85 + "vw";
  span.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.getElementById("name-rain").appendChild(span);

  setTimeout(() => span.remove(), 7000);
}, 1200);
// WhatsApp Share
function shareWhatsApp() {
  const msg = `🎄 Merry Christmas ${name}! 🎅\n${window.location.href}`;
  window.open(
    `https://wa.me/?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
function goToStories() {
  window.location.href = "stories.html" + window.location.search;
}
/* =========================================
   🎁 GIFT + NAME RAIN LOGIC
   ========================================= */

const giftIcons = ["🎁", "🎄", "⭐", "🍬", "🧸"];
const params2 = new URLSearchParams(window.location.search);
const giftName = params2.get("name") || "Friend";

setInterval(() => {
  const wrapper = document.createElement("div");
  wrapper.className = "falling-gift-wrapper";

  const gift = document.createElement("span");
  gift.className = "falling-gift-icon";
  gift.innerText = giftIcons[Math.floor(Math.random() * giftIcons.length)];

  const label = document.createElement("span");
  label.className = "falling-gift-name";
  label.innerText = giftName;

  wrapper.appendChild(gift);
  wrapper.appendChild(label);

  wrapper.style.left = Math.random() * 90 + "vw";
  wrapper.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.getElementById("gift-rain").appendChild(wrapper);

  setTimeout(() => wrapper.remove(), 10000);
}, 1000);
// different themes

function setTheme(theme) {
  document.body.classList.remove("theme-night", "theme-snow", "theme-candy");

  if (theme !== "night") {
    document.body.classList.add(`theme-${theme}`);
  }

  localStorage.setItem("theme", theme);
}

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
});




