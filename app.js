const selectionBtns = document.querySelectorAll("[data-selection]");
const winnerMsg = document.getElementById("round-winner");
const playerMoveBox = document.querySelector(".player-move");
const computerMoveBox = document.querySelector(".computer-move");
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset-btn');
const moves = ["rock", "paper", "scissors"];
let playerScore = 0 ;
let computerScore = 0 ;

selectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", (e) => {
    const selectionMove = selectionBtn.dataset.selection;
    selectedMove(selectionMove);
  });
});

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.innerText = "0";
  computerScoreSpan.innerText = "0";
  winnerMsg.innerText = "";
  playerMoveBox.innerHTML = "";
  computerMoveBox.innerHTML = "";
});

function selectedMove(selection) {
  const playerChoice = selection;
  const computerChoice = computerMove();

  console.log(playerChoice);
  console.log(computerChoice);

  showPlayerMove(playerChoice);
  showComputerMove(computerChoice);

  isWinner(playerChoice, computerChoice);
}

function computerMove() {
  let randomIndex = Math.floor(Math.random() * moves.length);
  let randomMove = moves[randomIndex];
  return randomMove;
}

function isWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    winnerMsg.innerText = "Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerMsg.innerText = "You win!";
    playerScore++;
    playerScoreSpan.innerText = playerScore ;
  } else {
    winnerMsg.innerText = "Computer win!";
    computerScore++ ;
    computerScoreSpan.innerText = computerScore ;
  }
}

function showPlayerMove(playerChoice) {
  playerMoveBox.innerHTML = "";
  const player = document.createElement("img");
  player.classList.add("move", "player-move");

  if (playerChoice === "rock") {
    player.src = "assets/rock-human.svg";
  } else if (playerChoice === "paper") {
    player.src = "assets/paper-human.svg";
  } else {
    player.src = "assets/scissors-human.svg";
  }
  playerMoveBox.appendChild(player);
}

function showComputerMove(computerChoice) {
  computerMoveBox.innerHTML = "";
  const computer = document.createElement("img");
  computer.classList.add("move", "computer-move");

  if (computerChoice === "rock") {
    computer.src = "assets/rock-computer.svg";
  } else if (computerChoice === "paper") {
    computer.src = "assets/paper-computer.svg";
  } else {
    computer.src = "assets/scissors-computer.svg";
  }
  computerMoveBox.appendChild(computer);
}
