
// ********* StopWatch **********

let timer;
let isRunning = false;
let initialTime = 0;

function startTimer(duration) {
  initialTime = duration;
  const display = document.getElementById('display');
  const timerEnd = Date.now() + initialTime * 1000;

  function updateDisplay() {
    const remainingTime = Math.max((timerEnd - Date.now()) / 1000, 0);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(timer);
      display.textContent = "Time's up!";
    }
  }

  updateDisplay();
  timer = setInterval(updateDisplay, 1000);
}

document.querySelectorAll('.buttons button').forEach(function(button) {
  button.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    const time = parseInt(button.getAttribute('data-time'));
    startTimer(time);
    isRunning = true;
  });
});

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  clearInterval(timer);
  document.getElementById('display').textContent = "00:00";
  isRunning = false;
});


// ************ CountDown Timer ************


let stopwatchTimer;
let isRunningg = false;
let seconds = 0;

document.getElementById('startResumeButton').addEventListener('click', function() {
  if (isRunningg) {
    clearInterval(stopwatchTimer);
    this.textContent = 'Resume';
  } else {
    stopwatchTimer = setInterval(runStopwatch, 1000);
    this.textContent = 'Pause';
  }
  isRunningg = !isRunningh;
});

document.getElementById('resetButtonn').addEventListener('click', function() {
  clearInterval(stopwatchTimer);
  document.getElementById('displayy').textContent = '00:00:00';
  isRunningg = false;
  document.getElementById('startResumeButton').textContent = 'Start';
  seconds = 0;
  clearLaps();
});

function runStopwatch() {
  seconds++;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  document.getElementById('displayy').textContent =
    (hours < 10 ? '0' : '') + hours + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}

function clearLaps() {
  const lapsList = document.getElementById('laps');
  lapsList.innerHTML = '';
}

function addLap() {
  const lapsList = document.getElementById('laps');
  const lapTime = document.getElementById('displayy').textContent;
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
  lapsList.appendChild(lapItem);
}

document.getElementById('lapsButton').addEventListener('click', function() {
  if (isRunningg) {
    addLap();
  }
});
