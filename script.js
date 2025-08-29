function updateTimer() {
      let currentDate = new Date();
      document.getElementById("timer").innerHTML = currentDate.toLocaleString();
    }

    // update immediately when page loads
    updateTimer();

    // update every second
    setInterval(updateTimer, 1000);