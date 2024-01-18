function getComputerChoice(choice) {
    return choice[Math.floor(Math.random() * choice.length)]
}
let rps = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt("Rock, paper or scissors?")
let computerSelection = getComputerChoice(rps);
let playerCounter = 0;
let computerCounter = 0;

//function addPlayerCounter(){
 //   computerCounter + 1;
//}
//function addComputerCounter(){
//    computerCounter + 1;
//}

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() == "Scissors" && playerSelection.toLowerCase() == "Paper",
        computerSelection.toLowerCase() == "Rock" && playerSelection.toLowerCase() == "Scissors",
        computerSelection.toLowerCase() == "Paper" && playerSelection.toLowerCase() == "Rock") {
            //addComputerCounter();
            return "Computer wins! Try again";
    }
    else if (computerSelection.toLowerCase() === playerSelection) {
        return "That's a tie! Play again!";
    }
    else {
        //addPlayerCounter;
        return "You won! Congratulations";
    }
}


console.log(playRound(playerSelection, computerSelection));
console.log(playerCounter);