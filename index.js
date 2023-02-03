
let playerScore = 0;
let computerScore = 0;
function playRound(pChoice, cChoice) {
    cChoice = Math.floor(Math.random()*3);
    let scissorsChoice;
    let paperChoice;
    let rockChoice;
    let result = ''
    if(cChoice == 1) {
         rockChoice = "rock"
    } else if(cChoice == 2) {
         paperChoice = 'paper'
    } else if(cChoice == 0) {
         scissorsChoice = 'scissors'
    }
    
    
    if(pChoice == "rock" && scissorsChoice ) {
        result = "You win, " + pChoice + " beats " + scissorsChoice 
        playerScore += 1
    } else if(pChoice == "rock" && paperChoice) {
        result = "You lose, " + paperChoice + " beats " + pChoice
        computerScore += 1;
    } else if(pChoice == 'rock' && rockChoice) {
        result = "It's a draw, " + pChoice + " ties " + rockChoice
    }

    if(pChoice == 'scissors' && rockChoice) {
        result = "You lose, " + rockChoice + " beats " + pChoice
        computerScore += 1
    } else if(pChoice == 'scissors' && paperChoice) {
        result = "You win, " + pChoice + " beats " + paperChoice
        playerScore += 1

    } else if(pChoice == 'scissors' && scissorsChoice) {
        result = "It's a draw, " + pChoice + " ties " + scissorsChoice
    }

    if(pChoice == 'paper' && scissorsChoice) {
        result = "You lose, " + scissorsChoice + " beats " + pChoice
        computerScore += 1

    } else if(pChoice == 'paper' && rockChoice) {
        result = "You win, " + pChoice + " beats " + rockChoice
        playerScore += 1

    } else if(pChoice == 'paper' && paperChoice) {
        result = "It's a draw, " + pChoice + " ties " + paperChoice
    }

    if(playerScore >= 5) {
        result = "Game over, you win"
    }
    if(computerScore >= 5) {
        result = "Game over, computer wins"
    }
    let newBody = document.querySelector('body')

    let divider = document.createElement("div")
    divider.classList.add("results")
    divider.style.border = "thick solid black"
    divider.style.backgroundColor = "white";
    divider.textContent = result + "..." + " Player score: " + playerScore + ", Computer score:  " + computerScore;
    newBody.appendChild(divider)
    
    return
}



//console.log(playRound('rock'));

// function game(choice) {
//     let result = ''
//     let wins = ''
//     let score = 0;
    
//     arrayResult = playRound(choice).split(" ")
//     console.log(arrayResult)
//     FinalarrayResult = arrayResult.includes("win,")
//     console.log(FinalarrayResult)
        
//     if (FinalarrayResult) {
//          score+=1
//      }

    
//     return  score + " out of 5 won"

// }


let buttons = document.querySelectorAll("button")

buttons.forEach(button => button.addEventListener("click", () => playRound(button.id)))



// let rockz = document.querySelector("#rock");

// rockz.addEventListener('click', () => { divider.textContent = playRound('rock'); 
//     scorekeep.textContent = game('rock') })

// let paperz = document.querySelector("#paper");

// paperz.addEventListener('click', () => { divider.textContent = playRound('paper'); 
//     scorekeep.textContent = game('paper'); })
 
// let scissorz = document.querySelector("#scissor")

// scissorz.addEventListener('click', () => { divider.textContent = playRound('scissors'); 
//     scorekeep.textContent = game('scissors') })

// let newBody = document.querySelector('body')

// let divider = document.createElement("div")
// divider.classList.add("results")
// divider.style.border = "thick solid black"
// divider.style.backgroundColor = "white";

// newBody.appendChild(divider)

// let scorekeep = document.createElement("div")
// scorekeep.classList.add("scorekeeper")
// scorekeep.style.border = "solid green"
// scorekeep.style.backgroundcolor = 'white';

// newBody.appendChild(scorekeep)

// divider.appendChild(new1)
// divider.appendChild(new2)
// divider.appendChild(new3)

