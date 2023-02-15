function displayRandomMessage() {
  let message = [
    "Now with eyes!",
    "Blast from the past!",
    "Колян, привет!",
    "Rate me!",
    "100% web!",
    "Coolest game ever!",
  ];
  let randomIndex = Math.floor(Math.random() * message.length);
  let randomMessage = message[randomIndex];
  let messageElement = document.querySelector(".header-pop");

  messageElement.innerHTML = randomMessage;
}

window.onload = displayRandomMessage;

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const resultTextTop = document.querySelector(".result-text-top");
const resultTextBottom = document.querySelector(".result-text-bottom");
const playerScoreNumber = document.querySelector("#player-score");
const computerScoreNumber = document.querySelector("#computer-score");
const buttons = document.querySelectorAll(".game-btn");
const computerChoiceArray = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    const randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    computerSelection = computerChoiceArray[randomNumber];

    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    resultMessage(
      "You won this round!",
      `${capitalise(playerSelection)} beats ${capitalise(computerSelection)}!`
    );
    playerScore += 1;
    resultNumber(playerScore, computerScore);
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    resultMessage(
      "You lost this round!",
      `${capitalise(computerSelection)} beats ${capitalise(playerSelection)}!`
    );
    computerScore += 1;
    resultNumber(playerScore, computerScore);
  } else if (playerSelection == computerSelection) {
    resultMessage("It's a tie!", "Nobody gets a score point!");
  }
}

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function resultMessage(str_1, str_2) {
  resultTextTop.innerText = str_1;
  resultTextBottom.innerText = str_2;
}

function resultNumber(num_1, num_2) {
  playerScoreNumber.innerText = num_1;
  computerScoreNumber.innerText = num_2;
}

const openBtn = document.getElementById("open-popup");
const closeBtn = document.getElementById("close-popup");
const popup = document.getElementById("popup");
const popupText = document.querySelector(".popup-text");

function declareWinner() {
  popup.classList.add("open");
  if (playerScore === 5) {
    popupText.innerText = "You won!";
  } else if (computerScore === 5) {
    popupText.innerText = "You lost!";
  }
}

closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
  (playerScore = 0), (computerScore = 0);
  resultNumber(playerScore, computerScore);
  resultMessage(
    "Try your luck in this classic game!",
    "First to score 5 points - wins!"
  );
});
