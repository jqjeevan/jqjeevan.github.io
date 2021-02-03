const COLS = 7;
const ROWS = 6;
const WIDTH = 50;
const CWIDTH = WIDTH*(3/4);

const GRID = Array(6).fill().map(() => Array(7).fill());

let whichPlayer = 1;

function setup() {
  createCanvas(COLS*WIDTH, ROWS*WIDTH + WIDTH);
}

function draw() {
  background("purple");
  fill("white");
  rect(-1, -1, width+2, WIDTH);
  makeGame();
}

function makeGame(){
  for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){
      fill("white");

      if (GRID[y][x] === 1) {
        fill("blue");
      }
      else if (GRID[y][x] === 2) {
        fill("red");
      }
      ellipse(x*WIDTH + WIDTH/2, y*WIDTH + 3*WIDTH/2, CWIDTH);
    }
  }
}

function sPlay(){
  if (whichPlayer === 1) {
    fill("blue");
  }
  else if (whichPlayer === 2) {
    fill("red");
  }
}

function winCheck() {
  // Test Horizontal 4
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x <= COLS-4; x++) {
      const test = GRID[y][x];
      if (test !== 0) {
        let temp = true;
        for (let k = 0; k < 4; k++) {
          if (GRID[y][x+k] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          return true;
        }
      }
    }
  }
  
  // Test Vertical 4
  for (let y = 0; y <= ROWS-4; y++) {
    for (let x = 0; x < COLS; x++) {
      const test = GRID[y][x];
      if (test !== 0) {
        let temp = true;
        for (let k = 0; k < 4; k++) {
          if (GRID[y+k][x] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          return true;
        }
      }
    }
  }
  
  // Test Diagonal 4
  for (let y = 0; y <= ROWS-4; y++) {
    for (let x = 0; x <= COLS-4; x++) {
      const test = GRID[y][x];
      if (test !== 0) {
        let temp = true;
        for (let k = 0; k < 4; k++) {
          if (GRID[y+k][x+k] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          return true;
        }
      }
    }
  }
  
  // Test Antidiagonal 4
  for (let y = 0; y <= ROWS-4; y++) {
    for (let x = 4; x < COLS; x++) {
      const test = GRID[y][x];
      if (test !== 0) {
        let temp = true;
        for (let k = 0; k < 4; k++) {
          if (GRID[y+k][x-k] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          return true;
        }
      }
    }
  }
  
  return false;
}

function mousePressed() {
  
}

