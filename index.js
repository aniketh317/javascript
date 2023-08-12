function getComputerChoice()
{
    const choices = ['rock','paper','scissors'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices[randomnumber];
}

function playRound(playerSelection, computerSelection) {
    ret = 0;//0 means draw, 1 means win, 2 means lost

    if(playerSelection != computerSelection)
    {
        ret = 2;
        if(playerSelection == 'rock' && computerSelection == 'scissors')
            ret = 1;
        if(playerSelection == 'paper' && computerSelection == 'rock')
            ret = 1;
        if(playerSelection == 'scissors' && computerSelection == 'paper')
            ret = 1;
    }
    return ret;
  }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();


// let result = playRound(playerSelection, computerSelection);
// if(result)
//     console.log("You won. Congrats");
// else
//     console.log("You lost. Sorry");

function game()
{
    console.log('Game starts');
    let ret;
    let playerSelection;
    let computerSelection;
    let z = 0;
    for(i=0;i<5;i++)
    {
        ret = 0;
        while(ret == 0)
        {
            playerSelection = prompt("Your selection");
            if(playerSelection == 'R'|| playerSelection == 'r')
                playerSelection = "rock";
            if(playerSelection == 'S'|| playerSelection == 's')
                playerSelection = "scissors";
            if(playerSelection == 'P'|| playerSelection == 'p')
                playerSelection = "paper";
            computerSelection = getComputerChoice();
            ret = playRound(playerSelection, computerSelection);
            if(ret == 0)
                console.log(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}, A Draw.`);     
        }
        if(ret == 1)
        {
            console.log(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}, You won.`);
            z++;
        }
        else
            console.log(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}, You lost.`);
    }
    if(z>2)
        console.log("Congats!! You won.")
    else
        console.log("Sorry!! You lost.")
}

game();