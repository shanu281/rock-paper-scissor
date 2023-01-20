let player = document.querySelector(".player");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let reset = document.getElementById("reset");
let h2 = document.querySelector("h2");

let computerOption = ["rock", "paper", "scissors"];
function computerOutput() {
  return computerOption.sort(() => Math.random() - 0.5)[0];
}

player.addEventListener("click", (event) => {
  let user = event.target.id;
  let computer = computerOutput();

  function getResult(user, computer) {
    if (user == computer) {
      return "Its a draw";
    } else if (user + computer == "rockpaper") {
      return "Computer won";
    } else if (user + computer == "rockscissors") {
      return "You won";
    } else if (user + computer == "paperrock") {
      return "You won";
    } else if (user + computer == "paperscissors") {
      return "Computer won";
    } else if (user + computer == "scissorsrock") {
      return "Computer won";
    } else if (user + computer == "scissorspaper") {
      return "You won";
    }
  }
  const result = getResult(user, computer);
  h2.innerText = result;

  function Score() {
    if (result == "You won") {
      const result = Number(playerScore.innerText) + 1;
      playerScore.innerText = result;
    } else if (result == "Computer won") {
      const result = Number(computerScore.innerText) + 1;
      computerScore.innerText = result;
    }
  }
  Score();
});

reset.addEventListener("click", (event) => {
  playerScore.innerText = 0;
  computerScore.innerText = 0;
});
