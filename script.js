let coloumns = 7

//** function setGame() {
   // board = []

    //for loop is going to iterate through each row and coloumn 
   // for (let r = 0; r < rows; r++){
       // for (let c = 0; r < coloumns; c++){
            //rows.push(' ');

            //HTML file, will give id to each section of grid e.g. 2-2/3-6 etc
            //will correlate to the array we made so that 5-3 will be [5][3]
           // let tile = document.createElement("div")
           // tile.id = r.toString() + "-" + c.toString();
            //tile.classList.add("tile");
           // document.getElementById("board").append(tile)
      //  };
       // board.push(row);
  //  };
//};


// fix a number for the rows and columns

const ROWS = 6;
const COLS = 7;


// make an array to represent the board
const board = [];

// Track current player
let currentPlayer = 'red';

// References to HTML elements
const boardElem = document.getElementById('board');
const messageElem = document.getElementById('message');

// Initialize the board visually and in memory
for (let row = 0; row < ROWS; row++) {
  board[row] = []; // Create a new row in the array

  for (let col = 0; col < COLS; col++) {

    // Create each cell in the grid
    const cell = document.createElement('div');
    cell.classList.add('cell'); // Add styling 
    cell.dataset.row = row;     // Store row and col in dataset
    cell.dataset.col = col;
    boardElem.appendChild(cell);  // Add cell to the board in HTML
    board[row][col] = null;     // Set initial state to empty
  }
}                   

boardElem.addEventListener('click', (e) => {
  const col = e.target.dataset.col;

  // When someone clicks a column, a disc would be placed instead
  for (let row = ROWS - 1; row >= 0; row--) {
    // Go from the bottom row upwards, looking for an empty spot
    if (board[row][col] === null || board[row][col] === "") {
      // Place the player's piece in the board array
      board[row][col] = currentPlayer;

      const allCells = Array.from(boardElem.children);
      const cell = allCells.find(c => c.dataset.row == row && c.dataset.col == col);

      // Add the player's color to the cell so it's visible
      cell.classList.add(currentPlayer);

      // Check if this move made the player win
      if (checkWin(row, col)) {
        messageElem.textContent = currentPlayer.toUpperCase() + " wins!";
        return;
      }

      // Check if all cells are filled (no empty spots left) – it's a draw
      const isDraw = board.flat().every(cell => cell !== null && cell !== "");
      if (isDraw) {
        messageElem.textContent = "It's a draw!";
        return;
      }

      // If no one won and it's not a draw, switch to the next player
      if (currentPlayer === "red") {
        currentPlayer = "yellow";
      } else {
        currentPlayer = "red";
      }

      return; 
    }
  }
});

// Function to check if a player has 4 in a row
function checkWin(row, col) {
  // 4 directions to check: horizontal, vertical and diagonal
  const directions = [
    [[0, 1], [0, -1]],   // left-right
    [[1, 0], [-1, 0]],   // up-down
    [[1, 1], [-1, -1]],  // diagonal 
    [[1, -1], [-1, 1]]   // diagonal 
  ];

  // Check each direction for 4 in a row
  for (const [[x1, y1], [x2, y2]] of directions) {
    let count = 1; // Count the current piece

    // Check both directions and add up same-color pieces
    count += countInDirection(row, col, x1, y1);
    count += countInDirection(row, col, x2, y2);

    // If 4 or more in a row, player wins
    if (count >= 4) return true;
  }

  return false;
}

// use function to count matching pieces in the same direction
function countInDirection(row, col, x, y) {
  let r = parseInt(row) + x;
  let c = parseInt(col) + y;
  let count = 0;

  // Stay in bounds and count same-color pieces
  while (
    r >= 0 && r < ROWS &&
    c >= 0 && c < COLS &&
    board[r][c] === currentPlayer
  ) {
    count++;
    r += x;
    c += y;
  }
  return count;
}
