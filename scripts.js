// sten = 1, sax = 2, påse = 3

const nameButton = document.getElementById('nameButton');
nameButton.addEventListener('click', changeh1);
const nameInput = document.getElementById('nameInput');
const username = document.querySelector('h1');

const startGame = document.getElementById('startGame')
const buttonContainer = document.getElementById('buttonContainer')
startGame.addEventListener('click', showGame)

const resetButton = document.querySelector('#resetButton')
resetButton.addEventListener('click', resetGame)

const yourPoints = document.getElementById('yourPoints')
const computerPoints = document.getElementById('computerPoints')
const userChoice = document.getElementById('userChoice')
const computerChoice = document.getElementById('computerChoice')
let userScore = 0;
let computerScore = 0;

const winner = document.getElementById('result')

computerPoints.innerText = "Datorns poäng: " + computerScore
yourPoints.innerText = "Dina poäng: " + userScore
function changeh1(event){
  event.preventDefault();
  username.innerText = 'Hej, '+ nameInput.value;
  startGame.classList.remove("inactiveGame")

}

function showGame(event){
  event.preventDefault();
  buttonContainer.classList.remove("inactiveGame");
  startGame.classList.add("inactiveGame")
  yourPoints.classList.remove("inactiveGame")
  computerPoints.classList.toggle("inactiveGame")
}

function compInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function roundEnd(result){
  // 0 = draw, 1 = vinst, 2 = förlust
  let resultMessage = "";
  if(result === 0){
    resultMessage = "Det blev lika!"
  }
  if(result === 1){
    userScore++
    resultMessage = "Du vann!"
    yourPoints.innerText = "Dina poäng: " + userScore
  }
  if(result === 2){
    computerScore++
    resultMessage = "Du förlorade! sopa"
    computerPoints.innerText = "Datorns poäng: " + computerScore
  }
  let resultText = document.querySelector("#roundWinner")
  resultText.innerText = resultMessage;
  gameOver(computerScore, userScore)
}

function resetGame(){
  location.reload();
}

function gameOver(computerScore, userScore){
  if(userScore === 3 || computerScore === 3){
    document.getElementById('userSten').disabled = true;
    document.getElementById('userSax').disabled = true;
    document.getElementById('userPåse').disabled = true;
    resetButton.classList.remove('inactiveGame')
  }
  if(userScore===3){
    winner.innerText = "GRATTIS DU SLAKTADE ELONGATED MUSKRAT"
  }else if(computerScore===3){
    winner.innerText = "Du förlorade.. Elon Musk skickar ett sniperteam till dina koordinater. Gud hjälpe dig"
  }
}

const stenButton = document.getElementById('userSten')
stenButton.addEventListener('click', ()=>{
  const rndInt = compInt(1, 3)
  if(rndInt === 1){
    roundEnd(0)
    userChoice.innerText = "Du valde sten"
    computerChoice.innerText = "Elon Musk valde sten"
  }else if(rndInt=== 2){
    roundEnd(1)
    userChoice.innerText = "Du valde sten"
    computerChoice.innerText = "Elon Musk valde sax"
  }else{
    roundEnd(2)
    userChoice.innerText = "Du valde sten"
    computerChoice.innerText = "Elon Musk valde påse"
  }
})
const saxButton = document.getElementById('userSax')
saxButton.addEventListener('click', ()=>{
  const rndInt = compInt(1, 3)
  if(rndInt === 1){
    roundEnd(2)
    userChoice.innerText = "Du valde sax"
    computerChoice.innerText = "Elon Musk valde sten"
  }else if(rndInt=== 2){
    roundEnd(0)
    userChoice.innerText = "Du valde sax"
    computerChoice.innerText = "Elon Musk valde sax"
  }else{
    roundEnd(1)
    userChoice.innerText = "Du valde sax"
    computerChoice.innerText = "Elon Musk valde påse"
  }
})
const påseButton = document.getElementById('userPåse')
påseButton.addEventListener('click', ()=>{
  const rndInt = compInt(1, 3)
  if(rndInt === 1){
    roundEnd(1)
    userChoice.innerText = "Du valde påse"
    computerChoice.innerText = "Elon Musk valde sten"
  }else if(rndInt=== 2){
    roundEnd(2)
    userChoice.innerText = "Du valde påse"
    computerChoice.innerText = "Elon Musk valde sax"
  }else{
    roundEnd(0)
    userChoice.innerText = "Du valde påse"
    computerChoice.innerText = "Elon Musk valde påse"
  }
})