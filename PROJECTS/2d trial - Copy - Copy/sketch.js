const COLS = 8;
const ROWS = 6;
const WIDTH = 80;
const CWIDTH = WIDTH*(3/4);

const GRID = Array(ROWS).fill(0).map(() => Array(COLS).fill(0));

let whichPlayer = 1;

function setup() {
  let myCanvas = createCanvas(COLS*WIDTH, ROWS*WIDTH + WIDTH);
  myCanvas.position(windowWidth*0.3, windowHeight*0.1);
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

function mousePressed(x, y) {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);
}

