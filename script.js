// create function to return computer choice of rock, paper, or scissors
// initialize function with no arguments
// use math.random to get a random num
// multiply by 10  and then math.floor to get nums from 0 to 9 
// modulo answer by 3 to get remainder from 0 - 2
// return computer choice based on resulting num ie if 0 then return rock


function getComputerChoice() {
    let randomNum = (Math.floor(Math.random() * 10)) % 3;

    if (randomNum === 0) {
        return 'rock';
    }
    else if (randomNum === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}


//initialize human choice function
//initialize variable for user choice
// use prompt to ask user for their choice, store answer in variable
//use ifs to account for spelling, return user's choice


function getHumanChoice() {
    let humanChoice = prompt("What do you want to throw (rock, paper, or scissors): ").toLowerCase();
   


    if (humanChoice === 'rock') {
        return 'rock';
    }
    else if (humanChoice === 'paper')  {
        return 'paper';
    }
    else if (humanChoice === 'scissors') {
        return 'scissors';
    }
    else {
        return 'Invalid choice';
    }

}

let humanScore = 0;
let computerScore = 0;

//function to output result of round
//increment score after each round

function playRound(humanChoice, computerChoice) {

    while (humanChoice === 'Invalid choice') {
        humanChoice = getHumanChoice();
    }

    if (humanChoice === computerChoice) {
        console.log("You tied!");
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose! Paper beats rock.');
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win! Rock beats scissors.');
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win! Paper beats rock.');
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Lose! Scissors beats paper.');
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You Lose! Rock beats scissors.');
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You Win! Scissors beats paper.');
        humanScore++;
    }
   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




