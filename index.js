

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

function game() {
    let result = ''
    let wins = ''
    let score = 0;
    for(let i = 0; i < 5; i++) {
        let player = prompt("Choose: rock, paper, or scissors ")
         arrayResult = playRound(player).split(" ")
         FinalarrayResult = arrayResult.includes("win,")
        
         if (FinalarrayResult) {
            score+=1
         }
         result += playRound(player) + ". "
    }
    
    return result +  score + " out of 5 won"

}

console.log(game());

