// =========== Light Mode

function darkMode() {
    window.location.href = "index3.html";
}

window.onload = function () {
    var hours = 1;
    var minutes = 1;
    var seconds = 0;
    var tens = 0;
    var appendHours = document.getElementById("hours");
    var appendMinutes = document.getElementById("minutes");
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval)
        tens = "00";
        seconds = "00";
        hours = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendHours.innerHTML = hours;
        appendMinutes.innerHTML = minutes;
    };

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds == 60) {
            tens = 0;
            seconds = 0;
            appendMinutes.innerHTML = "0" + minutes++;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
        if (minutes == 60) {
            minutes = 0;
            seconds = 0;
            appendHours.innerHTML = "0" + hours++;
        }
    }
};