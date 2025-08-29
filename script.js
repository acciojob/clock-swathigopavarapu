//your JS code here. If required.
function updateTimer() {
	const now = new Date();
	const formatted = now.toLocaleString("en-GB", {
		 year: "numeric",
         month: "2-digit",
         day: "2-digit",
         hour: "2-digit",
         minute: "2-digit",
         second: "2-digit",
         hour12: false
		 });
	 document.getElementById("timer").innerText = formatted.replace(",", "");
}
setInterval(updateTimer, 1000);
updateTimer();