// another3MinuteTimer.js;
const startBtn = document.querySelector(".startButton"),
  stopBtn = document.querySelector(".stopButton");

let intervalId;

function decreaseTime() {
  const second = document.querySelector(".second");
  let newSecond = second.innerText;
  newSecond = newSecond - 1; // newSecond--;
  if (newSecond < 0) {
    const minute = document.querySelector(".minute");
    let newMinute = minute.innerText;
    newMinute--;
    if (newMinute < 0) {
      clearInterval(intervalId);
      intervalId = undefined;
      newSecond = 0;
    } else {
      minute.innerText = newMinute;
      newSecond = 59;
    }
  }
  if (newSecond < 10) {
    second.innerText = "0" + newSecond;
  } else {
    second.innerText = newSecond;
  }
}

startBtn.addEventListener("click", function () {
  if (intervalId === undefined) {
    intervalId = setInterval(decreaseTime, 1000);
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = undefined;
});
