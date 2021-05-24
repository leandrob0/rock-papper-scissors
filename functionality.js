function computerPlay()
{
    let number = Math.floor(Math.random() * 3) + 1;

    if(number  === 1)
    {
        return 'Rock';
    } else if (number === 2)
    {
        return 'Paper';
    } else 
    {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors')
    {
        return 1;
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper')
    {
        return 2;
    }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors')
    {
        return 2;
    }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')
    {
        return 1;
    }else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock')
    {
        return 2;
    }else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')
    {
        return 1;
    } else {
        return `Its a draw! ${playerSelection} draws ${computerSelection}`;
    }
}

function game()
{
    let wins = 0;
    let lost = 0;

    for(let i = 0; i < 5;i++)
    {
        let playerSelection = prompt("Rock, paper or scissors? ").toString();
        let whoWon = playRound(playerSelection, computerPlay());
        
        if(whoWon == 1)
        {
            wins++;
            console.log("You win the round!");
        } else if(whoWon == 2)
        {
            lost++;
            console.log("You lost the round");
        } else {
            console.log("Draw!");
        }
        
    }

    if(wins > lost)
    {
        console.log("YOU WIN THE GAME!");
    } else if(lost > wins)
    {
        console.log("You lost the game :(");
    } else {
        console.log("Its a draw!");
    }
}

game();