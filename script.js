function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1){
        return "ROCK";
    }else if (computerChoice === 2){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?").toUpperCase();
}

function playGame(){
    let humanSelection, computerSelection;

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection){
        if(humanSelection === computerSelection){
            console.log("It's a tie! You both chose " + humanSelection + ".");
        }else if ((humanSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (humanSelection === "PAPER" && computerSelection === "ROCK") ||
        (humanSelection === "SCISSORS" && computerSelection === "PAPER")){
            console.log("You won! " + humanSelection + " beats " + computerSelection + ".");
            humanScore++;
        }else{
            console.log("You lost! " + computerSelection + " beats " + humanSelection + ".");
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore){
        console.log("It's a tie! 🤯")
    }else if (humanScore > computerScore){
        console.log("Congratulations! You won 🎉");
    }else{
        console.log("Sorry, you lost 😞");
    }
}

playGame();