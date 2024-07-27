function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1){
        return "rock";
    }else if (computerChoice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?");
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        console.log("It's a tie! You both chose " + humanSelection + ".");
    }else if ((humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")){
        console.log("You won! " + humanSelection + " beats " + computerSelection + ".");
        humanScore++;
    }else {
        console.log("You lost! " + computerSelection + " beats " + humanSelection + ".");
        computerScore++;
    }
}