let timeDisply = document.getElementById("timer");
let currentDate = new Date();
setInterval(
function()
{
currentDate = new Date();
timeDispaly.innerHTML =currentDate.toLocaleString();
},1000
)