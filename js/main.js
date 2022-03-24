
const computerChoiceDisplay = document.querySelector('#computer__choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')

// btns
let rockBtn = document.querySelector('#rockbtn')
let paperBtn = document.querySelector('#paperbtn')
let scissorsBtn = document.querySelector('#scissorsbtn')

// score
let yourScore = document.querySelector('#Youscore')
let compScore = document.querySelector('#compScore')

// visualuu score
// let you_scoreText = document.querySelector('#')
// let comp_scoreText= document.querySelector('#')


const possibleChoices = document.querySelectorAll('button');

let userChoice
let ComputerChoice
let result


let your_score = 0
let comp_score = 0

possibleChoices.forEach(possibleChoices =>possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1;

    if(randomNumber===1) {
        ComputerChoice ='rock';
    }
    if(randomNumber===2) {
        ComputerChoice ='scissors';
    }
    if(randomNumber===3) {
        ComputerChoice ='paper';
    }
    computerChoiceDisplay.innerHTML = ComputerChoice
}
function getResult() {
    if (ComputerChoice== 'rock' && userChoice=='rock') {
        result ='its a draw'
    }
    if (ComputerChoice=='rock' && userChoice=='paper') {
        result ='you win!'
        your_score++
        yourScore.textContent = your_score
    }
    if (ComputerChoice== 'rock' && userChoice=='scissors') {
        result ='its a lost'
        comp_score++
        compScore.textContent= comp_score
    }
    if (ComputerChoice== 'paper' && userChoice=='paper') {
        result ='its a draw'
    }
    if (ComputerChoice== 'paper' && userChoice=='scissors') {
        result ='its a win'
        your_score++
        yourScore.textContent = your_score
    }
    if (ComputerChoice== 'paper' && userChoice=='rock') {
        result ='its a lost'
        comp_score++
        compScore.textContent= comp_score
    }
    if (ComputerChoice== 'scissors' && userChoice=='scissors') {
        result ='its a draw'
    }
    if (ComputerChoice== 'scissors' && userChoice=='rock') {
        result ='its a win'
        your_score++
        yourScore.textContent = your_score
    }
    if (ComputerChoice== 'scissors' && userChoice=='paper') {
        result ='its a lost'
        comp_score++
        compScore.textContent= comp_score
    }
    winandLose();
    resultDisplay.innerHTML= result
}

function winandLose() {
    if(your_score==5) {
        alert('Your score is 5, You Win')
        your_score =0;
        comp_score =0;
        you_scoreText.textContent = your_score
        comp_scoreText.textContent = your_score
    }
    else if (comp_score == 5) {
        alert('Player score is 5, YOU LOSE!');
        y_scr = 0;
        r_scr = 0;
        you_scoreText.textContent = your_score
        comp_scoreText.textContent = your_score
      }
}