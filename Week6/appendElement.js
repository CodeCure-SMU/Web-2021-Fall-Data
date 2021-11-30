const makeBtn = document.querySelector(".makeBtn"),
  btnContainer = document.querySelector(".btnContainer");

const handleClicked = () => {};

const handleClick = (event) => {
  const webConsole = document.querySelector(".webConsole");
  webConsole.innerText = event.target.innerText + "!";
  setTimeout(() => {
    webConsole.innerText = "";
  }, 1000);
  event.target.removeEventListener("click", handleClick);
  event.target.addEventListener("click", handleClicked);
};

makeBtn.addEventListener("click", () => {
  const n = document.querySelector(".input").value;
  for (let i = 0; i < n; i++) {
    const smallButton = document.createElement("button");
    smallButton.id = "btn-" + (i + 1);
    smallButton.innerText = i + 1;
    smallButton.addEventListener("click", handleClick);

    btnContainer.appendChild(smallButton);
  }
});
