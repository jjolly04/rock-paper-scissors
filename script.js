// create function to return computer choice of rock, paper, or scissors
// initialize function with no arguments
// use math.random to get a random num
// multiply by 10  and then math.floor to get nums from 0 to 9
// modulo answer by 3 to get remainder from 0 - 2
// return computer choice based on resulting num ie if 0 then return rock

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 10) % 3;

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//initialize human choice function
//initialize variable for user choice
// use prompt to ask user for their choice, store answer in variable
//use ifs to account for spelling, return user's choice

function getHumanChoice() {
  let humanChoice = prompt(
    "What do you want to throw (rock, paper, or scissors): "
  ).toLowerCase();

  if (humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "scissors") {
    return "scissors";
  } else {
    return "Invalid choice";
  }
}

let humanScore = 0;
let computerScore = 0;

//function to output result of round
//increment score after each round

function playRound(humanChoice, computerChoice) {

  if (humanScore === 5 || computerScore === 5) {
    humanScore = 0;
    computerScore = 0; 

    const final_Result = document.querySelector('.finalResultText');
    final_Result.remove();

  }

  const result = document.getElementById("result");
  const playerScore = document.getElementById("player-score");
  const computersScore = document.getElementById("computer-score");

  let text = "";

  if (humanChoice === computerChoice) {
    text = "You tied!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    text = "You Lose! Paper beats rock.";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    text = "You Win! Rock beats scissors.";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    text = "You Win! Paper beats rock.";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    text = "You Lose! Scissors beats paper.";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    text = "You Lose! Rock beats scissors.";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    text = "You Win! Scissors beats paper.";
    humanScore++;
  }

  result.textContent = text;
  playerScore.textContent = 'Your Score: ' + humanScore;
  computersScore.textContent = 'Computer Score: ' + computerScore;


  //display's game's final winner

  const finalResult = document.createElement('div');
  finalResult.classList.add('finalResultText');

  const content = document.querySelector('.content');

  if (humanScore === 5) {
    finalResult.textContent = "Congrats! You got 5 points and won!";
    content.appendChild(finalResult);
  }
  else if (computerScore === 5) {
    finalResult.textContent = "Too bad! The computer got to 5 first and won!";
    content.appendChild(finalResult);
  }
  
}


//execute playRound on button press
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.getAttribute("id"), getComputerChoice());
  });
});



//add text content to result div
//add it to the tree as child of body
