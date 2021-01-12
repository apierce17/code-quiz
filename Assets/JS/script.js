const endButton = document.getElementById('end-btn')
const quizEndScreen = document.getElementById('save-score')

document.getElementById("start-btn").addEventListener("click", startTimer)

var sec = []
var timeLeft = []

// Timer
function startTimer() {
setInterval(startTimer, 1000);
var time = 11
function startTimer() {
  console.log("Seconds", time--)
  document.getElementById("time").innerText = time
  if (time == 00){
    time++
    endScreen()
  }
}
}

function endScreen() {
  quizEndScreen.classList.remove('hide')

}