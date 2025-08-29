//your JS code here. If required.
function updateTimer() {
  const now = new Date();

  // Format date as YYYY-MM-DD HH:MM:SS
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  document.getElementById("timer").innerText = formatted;
}

updateTimer();

setInterval(updateTimer, 1000);
