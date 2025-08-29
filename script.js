document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.getElementById("timer");
  if (!timeDisplay) {
    console.error('No element with id="timer" found.');
    return;
  }

  function updateTimer() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleString();
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
