let computerChoice
let humanChoice = ""
let computerScore = 0
let humanScore = 0

document.getElementById("rock").addEventListener("click", getHumanChoiceRock)
document.getElementById("paper").addEventListener("click", getHumanChoicePaper)
document.getElementById("scissors").addEventListener("click", getHumanChoiceScissors)

function getHumanChoiceRock(){
    humanChoice = "rock"
    playGame()
}

function getHumanChoicePaper(){
    humanChoice = "paper"
    playGame()
}

function getHumanChoiceScissors(){
    humanChoice = "scissors"
    playGame()
}

function getComputerChoice(){
    computerChoice = ""
    let num = Math.random() 
    if (num <= 0.333333333333333333) {
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

function playRound(computerChoice, humanChoice){
    if (humanChoice == "rock" && computerChoice == "paper"){
        document.getElementById("display").innerText = "You lose! Paper beats Rock."
        computerScore += 1        
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        document.getElementById("display").innerText = "You win! Rock beats Scissors."     
        humanScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        document.getElementById("display").innerText = "You win! Paper beats Rock."       
        humanScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        document.getElementById("display").innerText = "You lose! Scissors beats Paper."       
        computerScore += 1
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        document.getElementById("display").innerText = "You lose! Rock beats Scissors."    
        computerScore += 1
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        document.getElementById("display").innerText = "You win! Scissors beats Paper."      
        humanScore += 1
    }
    else {
        document.getElementById("display").innerText = "Draw! Both of you chose the same option."
    }
    document.getElementById("score").innerText = "Score: Human " + humanScore + " - " + computerScore + " Computer"
    document.getElementById("result").innerText = ""
}

function playGame(){
    let humanSelection, computerSelection
    humanSelection = humanChoice;
    computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    if (humanScore == 5){
        document.getElementById("result").innerText = "You have won the match!"
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore == 5){
        document.getElementById("result").innerText = "You have lost the match!"
        humanScore = 0
        computerScore = 0
    }
}

