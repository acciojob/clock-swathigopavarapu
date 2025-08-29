let timeDisplay = document.getElementById("timer"); // ✅ consistent variable name

setInterval(function () {
  let currentDate = new Date();
  timeDisplay.innerHTML = currentDate.toLocaleString();
}, 1000);
