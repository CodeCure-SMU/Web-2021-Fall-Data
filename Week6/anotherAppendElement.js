const makeBtn = document.querySelector(".makeBtn"),
  btnContainer = document.querySelector(".btnContainer"),
  webConsole = document.querySelector(".webConsole");

function handleNumberClick(event) {
  webConsole.innerText = event.target.innerText;
  setTimeout(function () {
    webConsole.innerText = "";
  }, 1000);
  event.target.removeEventListener("click", handleNumberClick);
}

function handleMakeClick() {
  const n = document.querySelector(".input").value;
  for (let i = 0; i < n; i++) {
    const newBtn = document.createElement("button");
    newBtn.class = "btn-" + (i + 1);
    newBtn.innerText = i + 1;
    newBtn.addEventListener("click", handleNumberClick);
    btnContainer.appendChild(newBtn);
  }
}

makeBtn.addEventListener("click", handleMakeClick);
