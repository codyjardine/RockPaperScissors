/**
 * Prompt user for choice, ask again on invalid input.
 * @returns user's choice, made case-insensitive.
 */
function userPlay() {
  let userChoice = prompt('Rock, paper, or scissors?').toLowerCase();
  while ((userChoice != 'rock') || (userChoice != 'paper') || (userChoice != 'scissors')){
    if ((userChoice === 'rock') || (userChoice === 'paper') || (userChoice === 'scissors')) {
      return userChoice;
    }
    userChoice = prompt('Invalid choice. Rock, paper, or scissors?').toLowerCase();
  }
}

/**
 * Randomly generate computer's choice.
 * @returns computer's choice.
 */
function computerPlay() {
  let choice = [ 'rock', 'paper', 'scissors' ];
  choice = choice[Math.floor(Math.random() * choice.length)];
  return choice;
}

/**
 * Checks for player win, computer win, or draw and adds it to score.
 * @param {string} playerSelection Player's choice.
 * @param {string} computerSelection Computer's choice.
 * @returns "win", "lose", or "draw" based on choices.
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    draws += 1;
    return;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    return;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    return;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    return;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
    return;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
    return;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    return;
  }
}  

// Displays the score in the console
function displayScore() {
  console.log('Your score: ' + playerScore);
  console.log('Computer\'s score: ' + computerScore);
  console.log('Draws: ' + draws);
  console.log('------------------------');
}

// Iterates the game over 5 rounds and outputs current scores.
function game() {
  let i;
  for (i = 0; i < 5; i += 1) {
    let playerSelection = userPlay();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log('Round ' + (1 + i));
    console.log('You: ' + playerSelection + ' | Computer: ' + computerSelection);
    displayScore();
  }
}

// Determine a winner or tie based on the score.
function checkWinner() {
  if (playerScore > computerScore) {
    console.log('You win!');
  } else if (computerScore > playerScore) {
    console.log('You lose!');
  } else {
    console.log('It\'s a tie!');
  }
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;
game();
checkWinner();
