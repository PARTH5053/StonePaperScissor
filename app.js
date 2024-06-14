let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreBoard = document.querySelector("#user-score");
let compScoreBoard = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "scissors", "paper"];
  let genIndx = Math.floor(Math.random() * 3);
  return options[genIndx];
};

const drawGame = () => {
  // console.log("game draw!");
  msg.innerText = `Game is Draw. Play Again.`;
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("user win!");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreBoard.innerText = userScore;
  } else {
    // console.log("user lose!");
    msg.innerText = `Oops! You Lost! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreBoard.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  // console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  // console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // compCHoice = paper scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //compCHoice = rock scissors
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //userCHoice = scissor
      //compCHoice = rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
