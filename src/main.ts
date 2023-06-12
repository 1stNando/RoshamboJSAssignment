import './style.css'

let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

// PlayerOne selections
function handlePlayerOneRockSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src = 'https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg'
  playerOneChoice = 'rock'
}

function handlePlayerOnePaperSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src = 'https://p0.pxfuel.com/preview/793/1023/818/background-crumpled-crushed-garbage.jpg'
  playerOneChoice = 'paper'
}

function handlePlayerOneScissorSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src = 'https://i.pinimg.com/originals/ef/8d/3c/ef8d3c61d0b582fcd78e77c397014c16.jpg'
  playerOneChoice = 'scissor'
}

// PlayerTwo selections
function handlePlayerTwoRockSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src = 'https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg'
  playerTwoChoice = 'rock'
}

function handlePlayerTwoPaperSelection(event) {
  document.querySelector('.playerTwoCard .blaknkImage').src = 'https://p0.pxfuel.com/preview/793/1023/818/background-crumpled-crushed-garbage.jpg'
  playerTwoChoice = 'paper'
}

function handlePlayerTwoScissorSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src = 'https://i.pinimg.com/originals/ef/8d/3c/ef8d3c61d0b582fcd78e77c397014c16.jpg'
  playerTwoChoice = 'scissor'
}

// Handle the END button PlayerOne
function handleEndButtonPlayerOne(event) {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.label')
    endLabel.textContent = 'Please click your choice before you end this turn'
    return
  }

  const playerOneHidden = document.querySelector('.playerOneCard')
  playerOneHidden.style.display = 'none'

  const playerTwoCard = document.querySelector('.playerTwoCard')
  playerTwoCard.style.display = 'flex'

}

// Handle the END button PlayerTwo
function handleEndButtonPlayerTwo(event) {
  const playerOneCard = document.querySelector('.playerOneCard')
  playerOneCard.style.display = 'flex'

  const gameButtons = document.querySelector('.gameButtons')
  gameButtons.style.display = 'flex'
  gameButtons.style.justifyContent = 'space-around'

  if (playerTwoChoice === '') {
    const endLabel = document.querySelector('.label')
    endLabel.textContent = 'You must pick before ending your turn!'
    return
  }

  if (playerOneChoice === playerTwoChoice) {
    const draw = document.querySelector('.label')
    draw.textContent = 'It is a draw!'
    return
  }

  
}









