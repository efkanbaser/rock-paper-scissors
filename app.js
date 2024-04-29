let computerChoice
let humanChoice
let computerScore = 0
let humanScore = 0

function getComputerChoice(){
    computerChoice = ""
    let num = Math.random() 
    if (num <= 0.3333333333333333333333333333) {
        computerChoice = "rock"
    }
    else if (num >= 0.33333333333333333333333 && num <= 0.66666666666666666666666) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice(){
    humanChoice = ""
    while (humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper"){
    humanChoice = prompt("Rock, paper or scissors?").toLowerCase()
    }
    return humanChoice
}

function playRound(computerChoice, humanChoice){
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock.")
        computerScore += 1        
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors.")        
        humanScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock.")        
        humanScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper.")        
        computerScore += 1
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors.")        
        computerScore += 1
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper.")        
        humanScore += 1
    }
    else {
        console.log("Draw! Both of you chose the same option.")
    }
    console.log("Score: Human " + humanScore + " - " + computerScore + " Computer")
}

function playGame(){
    let humanSelection, computerSelection
    for (let i=0; i<5; i++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    }
    if (humanScore > computerScore){
        console.log("You have won the match!")
    }
    else if (humanScore < computerScore){
        console.log("You have lost the match!")
    }
    else {
        console.log("The match ends in a draw.")
    }
    humanScore = 0
    computerScore = 0
}

playGame()