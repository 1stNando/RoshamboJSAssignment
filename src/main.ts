import './style.css'

let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

// PlayerOne selections
function handlePlayerOneRockSelection() {
  let rockElement: HTMLImageElement = document.querySelector('.playerOneCard .blankImage')!
  rockElement.src = 'https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg'
  
  playerOneChoice = 'rock'
}



function handlePlayerOnePaperSelection() {
  let paperElement: HTMLImageElement = document.querySelector('.playerOneCard .blankImage')!
  paperElement.src = 'https://w7.pngwing.com/pngs/512/78/png-transparent-paper-bag-shopping-bags-trolleys-book-bag-food-accessories-sticker-thumbnail.png'
  
  playerOneChoice = 'paper'
}


function handlePlayerOneScissorSelection() {
  let scissorElement: HTMLImageElement = document.querySelector('.playerOneCard .blankImage')!
  scissorElement.src = 'https://i.pinimg.com/originals/ef/8d/3c/ef8d3c61d0b582fcd78e77c397014c16.jpg'
  playerOneChoice = 'scissor'
}

function handlePlayerOneSpockSelection() {
  let spockElement: HTMLImageElement = document.querySelector('.playerOneCard .blankImage')!
  spockElement.src = 'https://t4.ftcdn.net/jpg/04/42/45/03/240_F_442450307_gHJBPwdChIgAXQ5CB0fXb3nIJboxQW36.jpg'
  playerOneChoice = 'spock'
}

function handlePlayerOneLizzardSelection() {
  let lizzardElement: HTMLImageElement = document.querySelector('.playerOneCard .blankImage')!
  lizzardElement.src = 'https://t4.ftcdn.net/jpg/01/25/29/81/240_F_125298142_RssOlalEHDR7uEqRPwM7k3ine0Mfh9my.jpg'
  playerOneChoice = 'spock'
}

// PlayerTwo selections
function handlePlayerTwoRockSelection() {
  let rockElement: HTMLImageElement = document.querySelector('.playerTwoCard .blankImage')!
  rockElement.src = 'https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg'
  
  playerTwoChoice = 'rock'
}

function handlePlayerTwoPaperSelection() {
  let paperElement: HTMLImageElement = document.querySelector('.playerTwoCard .blankImage')!
  paperElement.src = 'https://w7.pngwing.com/pngs/512/78/png-transparent-paper-bag-shopping-bags-trolleys-book-bag-food-accessories-sticker-thumbnail.png'
  
  playerTwoChoice = 'paper'
}

function handlePlayerTwoScissorSelection() {
  let scissorElement: HTMLImageElement = document.querySelector('.playerTwoCard .blankImage')!
  scissorElement.src = 'https://i.pinimg.com/originals/ef/8d/3c/ef8d3c61d0b582fcd78e77c397014c16.jpg'
  
  playerTwoChoice = 'scissor'
}

function handlePlayerTwoSpockSelection() {
  let spockElement: HTMLImageElement = document.querySelector('.playerTwoCard .blankImage')!
  spockElement.src = 'https://t4.ftcdn.net/jpg/04/42/45/03/240_F_442450307_gHJBPwdChIgAXQ5CB0fXb3nIJboxQW36.jpg'
  playerTwoChoice = 'spock'
}

function handlePlayerTwoLizzardSelection() {
  let lizzardElement: HTMLImageElement = document.querySelector('.playerTwoCard .blankImage')!
  lizzardElement.src = 'https://t4.ftcdn.net/jpg/01/25/29/81/240_F_125298142_RssOlalEHDR7uEqRPwM7k3ine0Mfh9my.jpg'
  playerTwoChoice = 'spock'
}

// Handle the END button PlayerOne
// This first part deals with the event that P1 tries to click the end turn before clicking on an option.
// This part's focus is to HIDE the P1Card AFTER P1 clicks the end turn.
// This last part handles the display of P2Card to be centered in the page.
function handleEndButtonPlayerOne() {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.label')
    if (endLabel instanceof HTMLHeadingElement) {
      endLabel.textContent = 'Please click your choice before you end this turn'
    }
    return
  }

  const playerOneCard = document.querySelector('.playerOneCard')
  if (playerOneCard instanceof HTMLElement) {
    playerOneCard.style.display = 'none'
  }

  const playerTwoCard = document.querySelector('.playerTwoCard')
  if (playerTwoCard instanceof HTMLElement) {
    playerTwoCard.style.display = 'flex'
  }
}

// Add event listener to the end button
const endButtonPlayerOne = document.querySelector('.endButtonPlayerOne button');
if (endButtonPlayerOne instanceof HTMLButtonElement) {
  endButtonPlayerOne.addEventListener('click', handleEndButtonPlayerOne);
}


// Handle the END button PlayerTwo. End of game and comparison of choice to determine winner.
function handleEndButtonPlayerTwo() {
  const playerOneCard = document.querySelector('.playerOneCard')
  if (playerOneCard instanceof HTMLElement) {
    playerOneCard.style.display = 'flex'
  }

  const gameButtons = document.querySelector('.gameButtons')
  if (gameButtons instanceof HTMLElement) {
    gameButtons.style.display = 'flex'
    gameButtons.style.justifyContent = 'space-around'
  }

  if (playerTwoChoice === '') {
    const endLabel = document.querySelector('.label')
    if (endLabel instanceof HTMLHeadingElement) {
      endLabel.textContent = 'You must pick before ending your turn!'
    }
    return
  }

  if (playerOneChoice === playerTwoChoice) {
    const draw = document.querySelector('.label')
    if (draw instanceof HTMLHeadingElement) {
      draw.textContent = 'It is a draw!'
    }
    return
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'scissor' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock')
  ) {
    const playerOneWin = document.querySelector('.playerOneScore')
    playerOne++;
    if (playerOneWin instanceof HTMLElement) {
      playerOneWin.textContent = `${playerOne}`
    }
    const displayWinner = document.querySelector('.label')
    if (displayWinner instanceof HTMLHeadingElement) {
      displayWinner.textContent = 'Player one wins!'
    }
  } else {
    const playerTwoWin = document.querySelector('.playerTwoScore')
    playerTwo++;
    if (playerTwoWin instanceof HTMLElement) {
      playerTwoWin.textContent = `${playerTwo}`
    }
    const displayWinner = document.querySelector('.label')
    if (displayWinner instanceof HTMLHeadingElement) {
      displayWinner.textContent = 'Player two wins!'
    }
  }
}



// Start of the game function
function handleStartTheGame() {
  const playerTwoCard = document.querySelector('.playerTwoCard');
  if (playerTwoCard instanceof HTMLElement) {
    playerTwoCard.style.display = 'none';
  }

  const startButton = document.querySelector('.start');
  if (startButton instanceof HTMLButtonElement) {
    startButton.textContent = 'Start the GAME!';
  }

  const gameButtonsSection = document.querySelector('.gameButtons');
  if (gameButtonsSection instanceof HTMLElement) {
    gameButtonsSection.style.display = 'none';
  }
}


// End of the game function
function handleEndTheGame() {
  const valueCountPlayer1 = document.querySelector('.playerOneScore')
  playerOne = 0
  if (valueCountPlayer1 instanceof HTMLElement) {
    valueCountPlayer1.textContent = `${playerOne}`
  }
}



// Main game. NOTE: we first had to write all the functions for each action before being able to apply them. Only then could we put together the code for "main".
const main = () => {
  const playerOneRock = document.querySelector('.playerOneCard .rock')
  playerOneRock?.addEventListener('click', handlePlayerOneRockSelection)

  const playerOnePaper = document.querySelector('.playerOneCard .paper')
  playerOnePaper?.addEventListener('click', handlePlayerOnePaperSelection)

  const playerOneScissors = document.querySelector('.playerOneCard .scissors')
  playerOneScissors?.addEventListener('click', handlePlayerOneScissorSelection)

  // Player Two handlers
  const playerTwoRock = document.querySelector('.playerTwoCard .rock')
  playerTwoRock?.addEventListener('click', handlePlayerTwoRockSelection)

  const playerTwoPaper = document.querySelector('.playerTwoCard .paper')
  playerTwoPaper?.addEventListener('click', handlePlayerTwoPaperSelection)

  const playerTwoScissor = document.querySelector('.playerTwoCard .scissor')
  playerTwoScissor?.addEventListener('click', handlePlayerTwoScissorSelection)

  // Start/End game button and player buttons logic
  const buttonPlayerOne = document.querySelector('.endButtonPlayerOne')
  buttonPlayerOne?.addEventListener('click', handleEndButtonPlayerOne)

  const buttonPlayerTwo = document.querySelector('.endButtonPlayerTwo button')
  buttonPlayerTwo?.addEventListener('click', handleEndButtonPlayerTwo)

  const startGame = document.querySelector('.start')
  startGame?.addEventListener('click', handleStartTheGame)

  const endGame = document.querySelector('.endGame')
  endGame?.addEventListener('click', handleEndTheGame)
}
//content load method
document.addEventListener('DOMContentLoaded', main)