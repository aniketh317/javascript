function getComputerChoice()
{
    const choices = ['rock','paper','scissors'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices[randomnumber];
}

function playRound(playerSelection, computerSelection) {
    ret = false;//means lost
    if(playerSelection == 'rock' && computerSelection == 'scissors')
        ret = true;
    if(playerSelection == 'paper' && computerSelection == 'rock')
        ret = true;
    if(playerSelection == 'scissors' && computerSelection == 'paper')
        ret = true;
    return ret;
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

let result = playRound(playerSelection, computerSelection);
if(result)
    console.log("You won. Congrats");
else
    console.log("You lost. Sorry");