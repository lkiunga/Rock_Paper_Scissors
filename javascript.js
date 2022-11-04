

const options = ["rock", "paper", "scissors"];

function getComputerChoice (){
    const choice = options[Math.floor(Math.random() * options.length)];
    
    return choice;
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }else {
        return "computer";
    }
}

function playRound (playerSelection, computerSelection){
    const result = checkWinner [playerSelection, computerSelection];
    if (result == "Tie"){
        return "It's a tie" ` ${playerSelection} is same as ${computerSelection}`;
    }else if (result ==  "player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game (){
    console.log ("Welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice ();
        console.log (playRound(playerSelection, computerSelection));
     }
}

game()