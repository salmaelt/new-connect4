// Number of rows and columns for Connect 4
const ROWS = 6;
const COLS = 7;

// 2D array to represent the board's state
const board = [];

// Track current player: 'red' or 'yellow'
let currentPlayer = 'red';

// References to HTML elements
const boardEl = document.getElementById('board');
const messageEl = document.getElementById('message');

// Initialize the board visually and in memory
for (let row = 0; row < ROWS; row++) {
  board[row] = []; // Create a new row in the array

  for (let col = 0; col < COLS; col++) {
    // Create each cell in the grid
    const cell = document.createElement('div');
    cell.classList.add('cell'); // Add styling class
    cell.dataset.row = row;     // Store row and col in dataset
    cell.dataset.col = col;
    boardEl.appendChild(cell);  // Add cell to the board in HTML
    board[row][col] = null;     // Set initial state to empty
  }
}