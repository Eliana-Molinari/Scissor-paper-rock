const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult ()

}))
function generateComputerChoice(){
    const randomNumber = math.floor( math.random() * 3)+1  // or possibleChoices.length
 if (randomNumber === 1) {
     computerChoice = 'rock'

 }
 if (randomNumber === 2) {
    computerChoice = 'scissors'

}
if (randomNumber === 3) {
    computerChoice = 'paper'

}
computerChoiceDisplay.innerHTML = computerChoice
}
 function getResult(){
     if (computerChoice === userChoice) {
         
         result = 'DRAW!'
     }
     if (computerChoice ==='rock' && userChoice === 'paper') {
         
        result = 'YOU WIN'
    }
    if (computerChoice ==='paper' && userChoice === 'rock') {
         
        result = 'COMPUTER WIN'
    }
    if (computerChoice ==='paper' && userChoice === 'scissors') {
         
        result = 'YOU WIN'
    }
    if (computerChoice ==='scissors' && userChoice === 'paper') {
         
        result = 'COMPUTER WIN'
    }
    if (computerChoice ==='scissors' && userChoice=== 'rock') {
         
        result = 'YOU WIN'
    }
    if (computerChoice ==='rock' && userChoice=== 'scissors') {
         
        result = 'COMPUTER WIN'
    }
    resultDisplay.innerHTML = result
 }
