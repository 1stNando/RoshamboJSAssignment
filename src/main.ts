import './style.css'

let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

// PlayerOne selections
function handlePlayerOneRockSelection() {
  document.querySelector('.playerOneCard .blankImage').src = 'https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg'
  
  playerOneChoice = 'rock'
}

function handlePlayerOnePaperSelection() {
  document.querySelector('.playerOneCard .blankImage').src = 'https://p0.pxfuel.com/preview/793/1023/818/background-crumpled-crushed-garbage.jpg'
  
  playerOneChoice = 'paper'
}

function handlePlayerOneScissorSelection() {
  document.querySelector('.playerOneCard .blankImage').src = 'https://i.pinimg.com/originals/ef/8d/3c/ef8d3c61d0b582fcd78e77c397014c16.jpg'
  playerOneChoice = 'scissor'
}

// PlayerTwo selections
function handlePlayerTwoRockSelection() {
  document.querySelector('.playerTwoCard .blankImage').src = 'https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg'
  
  playerTwoChoice = 'rock'
}

function handlePlayerTwoPaperSelection() {
  document.querySelector('.playerTwoCard .blaknkImage').src = 'https://p0.pxfuel.com/preview/793/1023/818/background-crumpled-crushed-garbage.jpg'
  playerTwoChoice = 'paper'
}

function handlePlayerTwoScissorSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src = 'https://i.pinimg.com/originals/ef/8d/3c/ef8d3c61d0b582fcd78e77c397014c16.jpg'
  playerTwoChoice = 'scissor'
}

// Handle the END button PlayerOne
function handleEndButtonPlayerOne() {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.label')
    if (endLabel instanceof HTMLButtonElement)
    endLabel.textContent = 'Please click your choice before you end this turn'
    return
  }

  const playerOneHidden = document.querySelector('.playerOneCard')
  if (playerOneHidden instanceof HTMLBodyElement)
  playerOneHidden.style.display = 'none'

  const playerTwoCard = document.querySelector('.playerTwoCard')
  if (playerTwoCard instanceof HTMLBodyElement)
  playerTwoCard.style.display = 'flex'

}

// Handle the END button PlayerTwo. End of game and comparison of choice to determine winner.
function handleEndButtonPlayerTwo() {
  const playerOneCard = document.querySelector('.playerOneCard')
  if (playerOneCard instanceof HTMLBodyElement)
  playerOneCard.style.display = 'flex'

  const gameButtons = document.querySelector('.gameButtons')
  if (gameButtons instanceof HTMLButtonElement)
  gameButtons.style.display = 'flex'
  if (gameButtons instanceof HTMLButtonElement)
  gameButtons.style.justifyContent = 'space-around'

  if (playerTwoChoice === '') {
    const endLabel = document.querySelector('.label')
    if (endLabel instanceof HTMLButtonElement)
    endLabel.textContent = 'You must pick before ending your turn!'
    return
  }

  if (playerOneChoice === playerTwoChoice) {
    const draw = document.querySelector('.label')
    if (draw instanceof HTMLBodyElement)
    draw.textContent = 'It is a draw!'
    return
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'scissor' &&  playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') 
  ) {
    const playerOneWin = document.querySelector('.playerOneScore')
    
    playerOne++
    if (playerOneWin instanceof HTMLBodyElement)
    playerOneWin.textContent = `${playerOne}`
    const displayWinner = document.querySelector('.label')
    if (displayWinner instanceof HTMLBodyElement)
    displayWinner.textContent = 'Player one wins!'
  } else {
    const playerTwoWin = document.querySelector('.playerTwoScore')
    playerTwo++
    if (playerTwoWin instanceof HTMLBodyElement)
    playerTwoWin.textContent = '${playerTwo}'
    const displayWinner = document.querySelector('.labe')
    if (displayWinner instanceof HTMLBodyElement)
    displayWinner.textContent = 'Player two wins!'
  }
}

// Start of the game function
function handleStartTheGame() {
  const playerTwoCard = document.querySelector('.playerTwoCard') 
  if (playerTwoCard instanceof HTMLBodyElement)
  playerTwoCard.style.display = 'none'

  const startGame = document.querySelector('.label')
  if (startGame instanceof HTMLBodyElement)
  startGame.textContent = 'Start the GAME!'

  const startGameButton = document.querySelector('.gameButtons')
  if (startGameButton instanceof HTMLBodyElement)
  startGameButton.style.display = 'none'
}

// End of the game function
function handleEndTheGame() {
  const valueCountPlayer1 = document.querySelector('.playerOneScore') 
  playerOne = 0
  if (valueCountPlayer1 instanceof HTMLBodyElement)
  valueCountPlayer1.textContent = `${playerOne}`
}


// Main game. NOTE: we first had to write all the functions for each action before being able to apply them. Only then could we put together the code for "main".
const main = () => {
  const playerOneRock = document.querySelector('.playerOneCard .rock')
  // if (playerOneRock instanceof HTMLButtonElement)
  playerOneRock?.addEventListener('click', handlePlayerOneRockSelection)

  const playerOnePaper = document.querySelector('.playerOneCard .paper')
  playerOnePaper?.addEventListener('click', handlePlayerOnePaperSelection)

  const playerOneScissors = document.querySelector('.playerOneCard .paper')
  playerOneScissors?.addEventListener('click', handlePlayerOneScissorSelection)

  // Player Two handlers'
  const playerTwoRock = document.querySelector('.playerTwoCard .rock')
  playerTwoRock?.addEventListener('click', handlePlayerTwoRockSelection)

  const playerTwoPaper = document.querySelector('.playerTwoCard .paper')
  playerTwoPaper?.addEventListener('click', handlePlayerTwoPaperSelection)

  const playerTwoScissor = document.querySelector('.playerTwoCard .scissor')
  playerTwoScissor?.addEventListener('click', handlePlayerTwoScissorSelection)

  







}

//content load method
document.addEventListener('DOMContentLoaded', main)