function showTime() {
    var getstartBtn = document.getElementById("stratBtn");
    var getstopBtn = document.getElementById("stopBtn");
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var pmAm = "AM";

    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        pmAm = "PM"
        hours = hours - 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // var clockTime = hours + " : " + minutes + " : " + seconds + " " + pmAm;
    var clockTime = `${hours} : ${minutes} : ${seconds} ${pmAm}`;
    document.getElementById("ClockScreen").innerText = clockTime;
}

var interval;
function startClock() {
    interval = setInterval(showTime, 1000);
    showTime();
    getstopBtn.disabled = false;
    getstartBtn.disabled = true;

}

function stopClock() {
    clearInterval(interval);
    getstartBtn.disabled = false;
    getstopBtn.disabled = true;
}

showTime();