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
    let humanChoice = prompt("What do you want to throw (rock, paper, or scissors): ");
    if (humanChoice === 'rock' || humanChoice === "Rock") {
        return 'rock';
    }
    else if (humanChoice === 'paper' || humanChoice === "Paper") {
        return 'paper';
    }
    else if (humanChoice === 'scissors' || humanChoice === 'Scissors') {
        return 'scissors';
    }
    else {
        return 'Invalid choice';
    }

}



