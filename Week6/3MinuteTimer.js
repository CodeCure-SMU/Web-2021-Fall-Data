const startButton = document.querySelector(".startButton"),
  stopButton = document.querySelector(".stopButton");

const timerId = [];
startButton.addEventListener("click", () => {
  timerId.push(
    setInterval(() => {
      const minute = document.querySelector(".minute");
      const second = document.querySelector(".second");
      let nextSecond = second.innerText - 1;
      if (nextSecond < 0) {
        minute.innerText--;
        nextSecond = 59;
      }
      second.innerText = nextSecond < 10 ? "0" + nextSecond : nextSecond;
    }, 1000)
  );
});

stopButton.addEventListener("click", () => {
  for (const id of timerId) {
    clearInterval(id);
  }
});
