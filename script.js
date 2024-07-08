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

