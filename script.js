(function () {
  const buttons = document.querySelectorAll(".pick");

  const scoreElement = document.getElementById("score");
  const main = document.getElementById("main");
  const selection = document.getElementById("selection");
  const reset = document.getElementById("reset");
  const choices = ["paper", "rock", "scissors"];
  const user_select = document.getElementById("user_select");
  const computer_select = document.getElementById("computer_select");
  const winner = document.getElementById("winner");
  let score = 0;

  let userChoice = undefined;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      userChoice = button.getAttribute("data-choice");

      checkWinner();
    });
  });
  reset.addEventListener("click", () => {
    main.style.display = "flex";
    selection.style.display = "none";
  });
  function checkWinner() {
    const computerChoice = pickRandomChoice();

    const winningCombination = {
      paper: "rock",
      rock: "scissors",
      scissors: "paper",
    };
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);
    if (userChoice === computerChoice) {
      winner.innerText = "Draw";
    } else if (winningCombination[userChoice] === computerChoice) {
      winner.innerText = "you win";
      updateScore(1);
    } else {
      winner.innerText = "you loose";
      updateScore(-1);
    }

    main.style.display = "none";
    selection.style.display = "flex";
  }

  function updateScore(value) {
    score += value;
    scoreElement.innerText = score;
  }

  function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function updateSelection(selectionEL, choice) {
    selectionEL.classList.remove("btn-paper", "btn-rock", "btn-scissors");
    const img = selectionEL.querySelector("img");
    selectionEL.classList.add(`btn-${choice}`);
    img.src = `/images/icon-${choice}.svg`;
    img.alt = choice;
  }
})();
