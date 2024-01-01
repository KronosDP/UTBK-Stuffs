// Get a reference to the 'time' div
var timeDiv = document.getElementById("time");

// Function to update the time
function updateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeDiv.textContent = hours + ":" + minutes + ":" + seconds;
}

// Update the time every second
setInterval(updateTime, 1000);

// Get a reference to the 'countdown' div
var countdownDiv = document.getElementById("countdown");

// Set the date we're counting down to
var countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownDiv.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownDiv.innerHTML = "EXPIRED";
  }
}, 1000);
