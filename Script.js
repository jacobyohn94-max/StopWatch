let hours = 0;
let minutes = 0;
let timer = null;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    updateDisplay();
}

function updateDisplay() {
    hoursDisplay.textContent = String(hours).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
}
