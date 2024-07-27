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