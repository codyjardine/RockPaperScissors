/**
 * Prompt user for choice.
 * @returns user's choice, made case-insensitive.
 */
function userPlay() {
  let userChoice = prompt('Rock, paper, or scissors?');
  return userChoice.toLowerCase();
}

/**
 * Randomly generate computer's choice.
 * @returns computer's choice.
 */
function computerPlay() {
  let choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}

/**
 * Checks for player win, computer win, or draw and adds it to score.
 * @param {string} playerSelection Player's choice.
 * @param {string} computerSelection Computer's choice.
 * @returns "win", "lose", or "draw" based on choices.
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      draws += 1;
      return 'draw';
    }
    if (computerSelection === 'scissors') {
      playerScore += 1;
      return 'win';
    }
    computerScore += 1;
    return 'lose';
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'paper') {
      draws += 1;
      return 'draw';
    }
    if (computerSelection === 'rock') {
      playerScore += 1;
      return 'win';
    }
    computerScore += 1;
    return 'lose';
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'scissors') {
      draws += 1;
      return 'draw';
    }
    if (computerSelection === 'rock') {
      computerScore += 1;
      return 'lose';
    }
    playerScore += 1;
    return 'win';
  }
}

/**
 * Iterates the game over 5 rounds and outputs current scores.
 */
function game() {
  let i;
  for (i = 0; i < 5; i += 1) {
    let playerSelection = userPlay();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log('Round ' + (1 + i));
    console.log(
        'You: ' + playerSelection + ' | Computer: ' + computerSelection);
    if (result === 'win') {
      console.log('Your score: ' + playerScore);
      console.log('Computer\'s score: ' + computerScore);
      console.log('Draws: ' + draws);
      console.log('------------------------');
    } else if (result === 'lose') {
      console.log('Your score: ' + playerScore);
      console.log('Computer\'s score: ' + computerScore);
      console.log('Draws: ' + draws);
      console.log('------------------------');
    } else {
      console.log('Your score: ' + playerScore);
      console.log('Computer\'s score: ' + computerScore);
      console.log('Draws: ' + draws);
      console.log('------------------------');
    }
  }
}

/**
 * Determine a winner or tie based on the score.
 */
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
