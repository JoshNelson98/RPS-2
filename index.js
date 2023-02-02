

function playRound(pChoice, cChoice) {
    cChoice = Math.floor(Math.random()*3);
    let scissorsChoice;
    let paperChoice;
    let rockChoice;
    if(cChoice == 1) {
         rockChoice = "rock"
    } else if(cChoice == 2) {
         paperChoice = 'paper'
    } else if(cChoice == 0) {
         scissorsChoice = 'scissors'
    }
    
    
    if(pChoice == "rock" && scissorsChoice ) {
        return("You win, " + pChoice + " beats " + scissorsChoice)
    } else if(pChoice == "rock" && paperChoice) {
        return("You lose, " + paperChoice + " beats " + pChoice)
    } else if(pChoice == 'rock' && rockChoice) {
        return("It's a draw, " + pChoice + " ties " + rockChoice)
    }

    if(pChoice == 'scissors' && rockChoice) {
        return("You lose, " + rockChoice + " beats " + pChoice)

    } else if(pChoice == 'scissors' && paperChoice) {
        return("You win, " + pChoice + " beats " + paperChoice)

    } else if(pChoice == 'scissors' && scissorsChoice) {
        return("It's a draw, " + pChoice + " ties " + scissorsChoice)
    }

    if(pChoice == 'paper' && scissorsChoice) {
        return("You lose, " + scissorsChoice + " beats " + pChoice)

    } else if(pChoice == 'paper' && rockChoice) {
        return("You win, " + pChoice + " beats " + rockChoice)

    } else if(pChoice == 'paper' && paperChoice) {
        return("It's a draw, " + pChoice + " ties " + paperChoice)
    }
}



//console.log(playRound('rock'));

function game(choice) {
    let result = ''
    let wins = ''
    let score = 0;
    
    arrayResult = playRound(choice).split(" ")
    console.log(arrayResult)
    FinalarrayResult = arrayResult.includes("win,")
    console.log(FinalarrayResult)
        
    if (FinalarrayResult) {
         score+=1
     }

    
    return  score + " out of 5 won"

}



let rockz = document.querySelector("#rock");

new1 = rockz.addEventListener('click', () => { divider.textContent = playRound('rock'); 
    scorekeep.textContent = game('rock') })

let paperz = document.querySelector("#paper");

paperz.addEventListener('click', () => { divider.textContent = playRound('paper'); 
    scorekeep.textContent = game('paper'); })
 
let scissorz = document.querySelector("#scissor")

scissorz.addEventListener('click', () => { divider.textContent = playRound('scissors'); 
    scorekeep.textContent = game('scissors') })

let newBody = document.querySelector('body')

let divider = document.createElement("div")
divider.classList.add("results")
divider.style.border = "thick solid black"
divider.style.backgroundColor = "white";

newBody.appendChild(divider)

let scorekeep = document.createElement("div")
scorekeep.classList.add("scorekeeper")
scorekeep.style.border = "solid green"
scorekeep.style.backgroundcolor = 'white';

newBody.appendChild(scorekeep)

// divider.appendChild(new1)
// divider.appendChild(new2)
// divider.appendChild(new3)

