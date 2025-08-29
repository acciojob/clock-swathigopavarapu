document.addEventListener("DOMContentLoaded", function() {
    let timeDisplay = document.getElementById("timer");

    setInterval(function () {
        let currentDate = new Date();
        timeDisplay.innerHTML = currentDate.toLocaleString();
    }, 1000);
});