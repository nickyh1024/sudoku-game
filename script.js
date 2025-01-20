const gridContainer = document.getElementById('sudoku-grid');

//create 9x9 grid
function createGrid() {
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('input');
        cell.classList.add('cell');
        cell.type = 'text';
        cell.maxLength = 1; //allow only one character
        gridContainer.appendChild(cell);
    }
}

//initialze grid on page load
createGrid();

const grid = document.querySelectorAll('.cell');

//sample suudoku puzzle (0 means empty)
const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];

  //fill the grid with the puzzle
  function loadPuzzle() {
    grid.forEach((cell, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9; 
        if (puzzle[row][col] !== 0) {
            cell.value = puzzle[row][col];
            cell.disabled = true; //prevent editing fixed numbers
        }
        else {
            cell.value = '';
            cell.disabled = false; 
        }
    });
  }

  //reset game
  document.getElementById('new-game').addEventListener('click', loadPuzzle); 

  //load the puzzle on page load
  loadPuzzle(); 

  