let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const checkWinner = document.getElementById('checkWinner');
const winnerDetails = document.getElementById('winnerDetails');
const playerScoreDOM = document.getElementById('playerScore');
const computerScoreDOM = document.getElementById('computerScore');
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');
const computerBtnRock = document.getElementById('computerBtnRock');
const computerBtnPaper = document.getElementById('computerBtnPaper');
const computerBtnScissors = document.getElementById('computerBtnScissors');
const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modalMsg');
const restartBtn = document.getElementById('restartBtn');

btnRock.addEventListener('click', () => startGame('rock'));
btnPaper.addEventListener('click', () => startGame('paper'));
btnScissors.addEventListener('click', () => startGame('scissors'));
restartBtn.addEventListener('click', restartGame);

// pick random value from array
function computerPlay() {
  let randomNumber = ['rock', 'paper', 'scissors'];
  randomNumber = randomNumber[Math.floor(Math.random() * 3)];
  return randomNumber;
}

// begin game on click, restart if over
function startGame(playerSelection) {
  if (endGame()) {
    openModal();
    return;
  }
  
  // clear win/lose colors on click
  computerBtnRock.style['background-color'] = '#2e3047';
  computerBtnPaper.style['background-color'] = '#2e3047';
  computerBtnScissors.style['background-color'] = '#2e3047';

  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  changeScore();

  if (endGame()) {
    openModal();
    endMsg();
  }
}

// open end of game modal when player or computer reaches 5 points
function openModal() {
  modal.classList.add('active');
}

// close end of game modal (when replay button is clicked)
function closeModal() {
  modal.classList.remove('active');
}

// determine winner and display result on modal
function endMsg() {
  if (playerScore > computerScore) {
    modalMsg.textContent = 'YOU WIN!';
  }
  else {
    modalMsg.textContent = 'YOU LOSE!';
  }
}

// determine winner, add to score, and change DOM
function playRound(playerSelection, computerSelection) {
  btnRock.style['background-color'] = '#2e3047';
  btnPaper.style['background-color'] = '#2e3047';
  btnScissors.style['background-color'] = '#2e3047';

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock'))
    {
    playerScore++;
    roundWinner = 'player';
  }

  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock'))
    {
    computerScore++;
    roundWinner = 'computer';
  }

  changeScoreMsg(roundWinner, playerSelection, computerSelection);
}

// change #checkWinner text based on results
function changeScore() {
  if (roundWinner === 'tie') {
    checkWinner.textContent = 'TIE!';
  } else if (roundWinner === 'player') {
    checkWinner.textContent = 'WINNER!';
  } else if (roundWinner === 'computer') {
    checkWinner.textContent = 'LOSER!';
  }
  playerScoreDOM.textContent = `${playerScore}`;
  computerScoreDOM.textContent = `${computerScore}`;
}

// change #winnerDetails text based on results
function changeScoreMsg(roundWinner, playerSelection, computerSelection) {
  if (roundWinner === 'player') {

    if (playerSelection === 'rock') {
      winnerDetails.textContent = `${capitalizeFirstLetter(playerSelection)} crushes ${computerSelection.toLowerCase()}.`;
      winRock();
      return;
    }
    else if (playerSelection === 'paper') {
      winnerDetails.textContent = `${capitalizeFirstLetter(playerSelection)} covers ${computerSelection.toLowerCase()}.`;
      winPaper();
      return;
    }
    winnerDetails.textContent = `${capitalizeFirstLetter(playerSelection)} cuts ${computerSelection.toLowerCase()}.`;
    winScissors();
    return;
  }
  
  if (roundWinner === 'computer') {
    if (computerSelection === 'rock') {
      winnerDetails.textContent = `${capitalizeFirstLetter(computerSelection)} crushes ${playerSelection.toLowerCase()}.`;
      winRock();
      return;
    }
    else if (computerSelection === 'paper') {
      winnerDetails.textContent = `${capitalizeFirstLetter(computerSelection)} covers ${playerSelection.toLowerCase()}.`;
      winPaper();
      return;
    }
    winnerDetails.textContent = `${capitalizeFirstLetter(computerSelection)} cuts ${playerSelection.toLowerCase()}.`;
    winScissors();
    return;
  }

  if (playerSelection === computerSelection) {
    if (playerSelection === 'rock') {
      tieRock();
    }
    if (playerSelection === 'paper') {
      tiePaper();
    }
    if (playerSelection === 'scissors') {
      tieScissors();
    }
  }
}

// set 5 as winning score
function endGame() {
  return playerScore === 5 || computerScore === 5;
}

// capitalize first character
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// reset variables and DOM
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  checkWinner.textContent = 'MAKE YOUR MOVE';
  winnerDetails.textContent = 'Score 5 points to win!';
  playerScoreDOM.textContent = '0';
  computerScoreDOM.textContent = '0';
  btnRock.style['background-color'] = '#2e3047';
  btnPaper.style['background-color'] = '#2e3047';
  btnScissors.style['background-color'] = '#2e3047';
  computerBtnRock.style['background-color'] = '#2e3047';
  computerBtnPaper.style['background-color'] = '#2e3047';
  computerBtnScissors.style['background-color'] = '#2e3047';
  modal.classList.remove('active');
}

// everything below this comment changes button background colors
function winRock() {
  if (roundWinner === 'player') {
    btnRock.style['background-color'] = 'green';
    computerBtnScissors.style['background-color'] = 'darkred';
  }
  else if (roundWinner === 'computer') {
    computerBtnRock.style['background-color'] = 'green';
    btnScissors.style['background-color'] = 'darkred';
  }
}

function winPaper() {
  if (roundWinner === 'player') {
    btnPaper.style['background-color'] = 'green';
    computerBtnRock.style['background-color'] = 'darkred';
  }
  else if (roundWinner === 'computer') {
    computerBtnPaper.style['background-color'] = 'green';
    btnRock.style['background-color'] = 'darkred';
  }
}

function winScissors() {
  if (roundWinner === 'player') {
    btnScissors.style['background-color'] = 'green';
    computerBtnPaper.style['background-color'] = 'darkred';
  }
  else if (roundWinner === 'computer') {
    computerBtnScissors.style['background-color'] = 'green';
    btnPaper.style['background-color'] = 'darkred';
  }
}

function tieRock() {
  btnRock.style['background-color'] = '#555';
  computerBtnRock.style['background-color'] = '#555';
  winnerDetails.textContent = 'Try again.';
}

function tiePaper() {
  btnPaper.style['background-color'] = '#555';
  computerBtnPaper.style['background-color'] = '#555';
  winnerDetails.textContent = 'Try again.';
}

function tieScissors() {
  btnScissors.style['background-color'] = '#555';
  computerBtnScissors.style['background-color'] = '#555';
  winnerDetails.textContent = 'Try again.';
}
