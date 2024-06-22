// Inisialisasi
let startDate = localStorage.getItem("startDate");
if (!startDate) {
  startDate = new Date();
  localStorage.setItem("startDate", startDate);
} else {
  startDate = new Date(startDate);
}

const savedTitle = localStorage.getItem("counterTitle") || "Streak Day Counter";
document.getElementById("title-input").value = savedTitle;
document.title = savedTitle;

// Event listener judul ketika berganti
document.getElementById("title-input").addEventListener("input", function () {
  const title = this.value || "Streak Day Counter";
  localStorage.setItem("counterTitle", title);
  document.title = title;
});

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const totalSecondsInDay = 24 * 60 * 60;
  const elapsedSecondsToday = hours * 60 * 60 + minutes * 60 + seconds;
  const progress = (elapsedSecondsToday / totalSecondsInDay) * 100;

  const circle = document.querySelector(".progress-bar");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${
    circumference * (progress / 100)
  } ${circumference}`;

  document.getElementById("progress-text").innerText = `${days} Days`;
  document.getElementById("time-counter").innerText = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function confirmReset() {
  if (confirm("Are you sure you want to reset the counter?")) {
    resetCounter();
  }
}

function resetCounter() {
  startDate = new Date();
  localStorage.setItem("startDate", startDate);
  updateCounter();
}

updateCounter();
setInterval(updateCounter, 1000);
