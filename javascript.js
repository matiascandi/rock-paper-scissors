function getComputerChoice(choice) {
    return choice[Math.floor(Math.random() * choice.length)]
}
let rps = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundsToPlay = 5;

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.trim().toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    if (computerChoice == "scissors" && playerChoice == "paper" ||
        computerChoice == "rock" && playerChoice == "scissors" ||
        computerChoice == "paper" && playerChoice == "rock"){
        computerScore++;
        return "Computer wins! Try again";
    }
    else if (computerChoice == playerChoice) {
        return "That's a tie! Play again!";
    }
    else if (playerChoice == "scissors" && computerChoice == "paper" ||
    playerChoice == "rock" && computerChoice == "scissors" ||
    playerChoice == "paper" && computerChoice == "rock"){
        playerScore++;
        return "You won! Congratulations!";
    }
    return "Invalid selections. Please choose Rock, Paper, or Scissors";
}

function game(){
    for (let round = 1; round <= roundsToPlay; round++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice(rps);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    }
    if (playerScore === 3){
        console.log("Congratulations! You won the game!");
    } else if (computerScore === 3){
        console.log("Sorry, you lost. Try again!");
    }
    return "invalid";
}
