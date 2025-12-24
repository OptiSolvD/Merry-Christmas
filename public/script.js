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
function toggleMusic() {
  const music = document.getElementById("music");
  music.volume = 0.4;
  music.paused ? music.play() : music.pause();
}

// Info
function toggleInfo() {
  document.getElementById("info").classList.toggle("hidden");
}

// Santa Calling Animation
function callFromSanta() {
  const box = document.getElementById("santa-call");
  box.innerText = `🎅 You are loved more than you know, my dear child., ${name} 🎄`;
  box.classList.remove("hidden");

  setTimeout(() => {
    box.classList.add("hidden");
  }, 4000);
}

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
  window.location.href = "stories.html";
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



