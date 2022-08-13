let hours = 00
let minutes = 00
let seconds = 00
let miliSeconds = 00
let interval

let appendHours = document.getElementById('hours')
let appendMinutes = document.getElementById('minutes')
let appendSeconds = document.getElementById('seconds')
let appendMiliSeconds = document.getElementById('miliseconds')

function startTimer() {
  {
    miliSeconds++
    if (miliSeconds <= 9) {
      appendMiliSeconds.innerHTML = '0' + miliSeconds
    }
    if (miliSeconds > 9) {
      appendMiliSeconds.innerHTML = miliSeconds
    }
    if (miliSeconds == 100) {
      seconds++
      appendSeconds.innerHTML = '0' + seconds
      miliSeconds = 0
      appendMiliSeconds.innerHTML = '0' + 0
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds
    }
    if (seconds == 60) {
      minutes++
      appendMinutes.innerHTML = '0' + minutes
      seconds = 0
      appendSeconds.innerHTML = '0' + seconds
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes
    }
    if (minutes == 60) {
      hours++
      appendHours.innerHTML = '0' + hours
      minutes = 0
      appendMinutes.innerHTML = '0' + 0
    }

    if (hours > 9) {
      appendHours.innerHTML = hours
    }
  }
}

function resetTimer() {
  miliSeconds = 00
  seconds = 00
  minutes = 00
  hours = 00
  appendSeconds.innerHTML = '0' + 0
  appendMiliSeconds.innerHTML = '0' + 0
  appendMinutes.innerHTML = '0' + 0
  appendHours.innerHTML = '0' + 0
}
function pauseTimer() {
  clearInterval(interval)
}

function runTimer() {
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(startTimer, 10)
}
