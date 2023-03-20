// initialize game board
let board = [  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// initialize players
const PLAYER_ONE = 'X';
const PLAYER_TWO = 'O';
let currentPlayer = PLAYER_ONE;

// function to check if the game has ended
function checkEndGame() {
  // check rows
  for (let row = 0; row < 3; row++) {
    if (board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
      return board[row][0];
    }
  }

  // check columns
  for (let col = 0; col < 3; col++) {
    if (board[0][col] && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
      return board[0][col];
    }
  }

  // check diagonals
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }

  // check for tie
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        return null;
      }
    }
  }

  // game is a tie
  return 'Tie';
}

// function to display game board
function displayBoard() {
  for (let row = 0; row < 3; row++) {
    let rowString = '';
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        rowString += ' - ';
      } else {
        rowString += ' ' + board[row][col] + ' ';
      }
    }
    console.log(rowString);
  }
}

// function to prompt user for their move
function promptMove() {
  let row = prompt(`Player ${currentPlayer}: Enter row (0-2)`);
  let col = prompt(`Player ${currentPlayer}: Enter column (0-2)`);

  if (board[row][col]);