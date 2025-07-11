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
    cell.classList.add('cell'); // Add styling class
    cell.dataset.row = row;     // Store row and col in dataset
    cell.dataset.col = col;
    boardElem.appendChild(cell);  // Add cell to the board in HTML
    board[row][col] = null;     // Set initial state to empty
  }
}                   
boardElem.addEventListener('click', (e) => {
  const col = e.target.dataset.col;

// When someone clicks a column, we try to place their disc there
for (let row = ROWS - 1; row >= 0; row--) {
  // Go from the bottom row upwards, looking for an empty spot
  if (board[row][col] === null || board[row][col] === "") {
    // Place the player's piece in the board array
    board[row][col] = currentPlayer;

  }}});
