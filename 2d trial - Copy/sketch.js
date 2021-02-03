const ROWS = 7;
const COLS = 8;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let playerColor = "blue";
let player = false;


function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;
  //add player to grid
  // grid[playerY][playerX] = 2;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  changePlayer(x, y);
}


function displayGrid() {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("red");
      }
      else if (grid[y][x] === 2) {
        fill("blue");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}

function changePlayer(x, y){
 
  if (grid[y][x] === 0) {
    if (player === false){
      grid[y][x] = 1;
      player = true;
    }
    else {
      grid[y][x] = 2;
      player = false;
    }
  }
}


