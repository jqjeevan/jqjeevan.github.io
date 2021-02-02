const TSIZE = 50;
const COLS = 7;
const ROWS = 6;
const grid = Array(ROWS+1).fill().map(() => Array(COLS).fill(-1));
let currentPlayer = 0;
const queue = [];
let currentMove = -1;
let currentRow = 0;

function setup() {
  createCanvas(COLS*TSIZE, ROWS*TSIZE + TSIZE);
}

function mousePressed() {
  queue.push(floor(mouseX / TSIZE));
}

function whoWon() {
  let win = null;
}

function draw() {
  background(255);
  noStroke();
  fill(255, 255, 0);
  rect(0, TSIZE, width, height-TSIZE);
  for (let i = 1; i < COLS; i++) {
    stroke(175, 175, 0);
    line(i*TSIZE, TSIZE, i*TSIZE, height);
  }
  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      stroke(175, 175, 0);
      fill(255);
      if (grid[j][i] === 0) {
        fill(255, 0, 0);
      } else if (grid[j][i] === 1) {
        fill(0, 0, 255);
      }
      circle(i*TSIZE + TSIZE/2, j*TSIZE + 3*TSIZE/2, 0.8 * TSIZE);
    }
  }
  noStroke();
  if (currentPlayer === 0) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 255);
  }
  circle(mouseX, TSIZE/2, 0.8 * TSIZE);
  if (currentMove < 0) {
    if (queue.length > 0) {
      currentMove = queue.shift();
      if (grid[0][currentMove] < 0) {
        currentRow = 0;
        grid[currentRow][currentMove] = currentPlayer;
      } else {
        currentMove = -1;
      }
    }
  } else {
    if (grid[currentRow+1][currentMove] < 0 && currentRow < ROWS-1) {
      if (frameCount % 2 === 0) {
        grid[currentRow+1][currentMove] = grid[currentRow][currentMove];
        grid[currentRow][currentMove] = -1;
        currentRow++;
      }
    } else {
      currentMove = -1;
      currentPlayer = 1 - currentPlayer;
    }
  }
}