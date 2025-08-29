document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.getElementById("timer");
  if (!timeDisplay) {
    console.error('No element with id="timer" found.');
    return;
  }

  function pad(n){ return String(n).padStart(2, "0"); }

  function updateTimer() {
    const d = new Date();
    const formatted = [
      d.getFullYear(),
      pad(d.getMonth() + 1),
      pad(d.getDate())
    ].join("-") + " " + [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    timeDisplay.textContent = formatted;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
