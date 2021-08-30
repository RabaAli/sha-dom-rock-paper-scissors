// computers function
const computer = document.getElementById("computer");
const player = document.getElementById("player");
const playResult = document.getElementById("playResult");
const btns = document.querySelectorAll("button");
let playerSelection;
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    playerSelection = e.target.id;
    computerPlay();
    player.innerHTML = playerSelection;
    playRound();
  })
);

function computerPlay() {
  let options = ["rock", "paper", "scissors"];

  computerSelection = options[Math.floor(Math.random() * 3)];
  computer.innerHTML = computerSelection;
  return computerSelection;
}

function playRound() {
  if (playerSelection === computerSelection) {
    result = "its a tie, try again";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    result = "you lose, try again";
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    result = "you won, congratulations";
  }
  playResult.innerHTML = result
}

/*function game() {

  for (let i = 1; i <= 5 ; i++) {
    playRound();
  }
  console.log(playRound());
}*/
/*const btn1 = document.getElementById("1");
btn1.addEventListener("click", function(){
  playRound("paper", computerSelection);
});
const btn2 = document.getElementById("2");
btn2.addEventListener("click", function(){
  playRound("rock", computerSelection);
});
const btn3 = document.getElementById("3");
btn3.addEventListener("click", function(){
  playRound("scissors", computerSelection);
});*/
