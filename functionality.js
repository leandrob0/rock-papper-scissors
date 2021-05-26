//THIS IS HORRIBLE CODE BE AWARE.



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
    if(playerSelection === 'Rock' && computerSelection === 'Scissors')
    {
        return 1;
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper')
    {
        return 2;
    }else if(playerSelection === 'Paper' && computerSelection === 'Scissors')
    {
        return 2;
    }else if(playerSelection === 'Paper' && computerSelection === 'Rock')
    {
        return 1;
    }else if(playerSelection === 'Scissors' && computerSelection === 'Rock')
    {
        return 2;
    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper')
    {
        return 1;
    } else {
        return `Its a draw! ${playerSelection} draws ${computerSelection}`;
    }
}

let playerSelection;

const divResult = document.createElement('div');
const container = document.querySelector('#results-div');
const final = document.querySelector('#final');

divResult.classList.add('results');

let wins = 0, lost = 0;
let finished = false;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', () => {
    
    if(wins >= 5 && !finished)
    {
        let celebration = document.createElement('h3');
        celebration.textContent = 'YOU WON THE GAME!';
        finished = true;
        final.appendChild(celebration);
        return ; 
    } else if(lost >= 5 && !finished)
    {
        let f = document.createElement('h3');
        f.textContent = 'The computer won the game';
        finished = true;
        final.appendChild(f);
        return ; 
    }
    
    if(!finished)
    {
        playerSelection = button.textContent;

        const result = document.createElement('p');
        let play = playRound(playerSelection, computerPlay());

        let phrase;

        if(play === 1)
        {
            phrase = "You win the round!";
            wins++;
        } else if (play === 2)
        {
            phrase = "You lose the round.";
            lost++;
        } else {
            phrase = "Draw";
        }

        result.textContent = `${phrase}`;
        divResult.appendChild(result);

        container.appendChild(divResult);
    }

    return ;
}));