const ROWS = 7;
const COLS = 8;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let playerColor = "blue";
let player = false;
let playertoggle = "blue";
let click;
let bgmusic;
let ifWin = 0;

function preload(){
  click = loadSound("assets/click.wav");
  bgmusic = loadSound("assets/backgroundmusic.mp3");
}

function setup() {
  bgmusic.loop();

  let myCanvas = createCanvas(windowWidth*0.7, windowHeight*0.8);
  myCanvas.position(windowWidth*0.15, windowHeight*0.1);

  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;

  background(102, 0, 102, 0);
}

function draw() {

  displayGrid();
  winCheck();

}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  changePlayer(x, y);

  click.play();

  finalWinToggle();

}


function displayGrid() {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill(102, 0, 102, 40);
      }
      else if (grid[y][x] === 1) {
        fill(255, 0, 0, 40);
      }
      else if (grid[y][x] === 2) {
        fill(0, 0, 255, 40);
      }
      ellipse(x*cellWidth+cellWidth/2, y*cellHeight+ cellHeight/2, cellHeight, cellHeight);
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

function winCheck() {
  // Test Horizontal 4
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x <= COLS-4; x++) {
      const test = grid[y][x];
      if (test !== 0) {
        let temp = true;
        for (let checkAround = 0; checkAround < 4; checkAround++) {
          if (grid[y][x+checkAround] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          ifWin = 1;
        }
      }
    }
  }
  
  // Test Vertical 4
  for (let y = 0; y <= ROWS-4; y++) {
    for (let x = 0; x < COLS; x++) {
      const test = grid[y][x];
      if (test !== 0) {
        let temp = true;
        for (let checkAround = 0; checkAround < 4; checkAround++) {
          if (grid[y+checkAround][x] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          ifWin = 1;
        }
      }
    }
  }
  
  // Test Diagonal 4
  for (let y = 0; y <= ROWS-4; y++) {
    for (let x = 0; x <= COLS-4; x++) {
      const test = grid[y][x];
      if (test !== 0) {
        let temp = true;
        for (let checkAround = 0; checkAround < 4; checkAround++) {
          if (grid[y+checkAround][x+checkAround] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          ifWin = 1;
        }
      }
    }
  }
  
  // Test Antidiagonal 4
  for (let y = 0; y <= ROWS-4; y++) {
    for (let x = 4; x < COLS; x++) {
      const test = grid[y][x];
      if (test !== 0) {
        let temp = true;
        for (let checkAround = 0; checkAround < 4; checkAround++) {
          if (grid[y+checkAround][x-checkAround] !== test) {
            temp = false;
          }
        }
        if (temp === true) {
          ifWin = 1;
        }
      }
    }
  }
  if (ifWin === 1) {
    if (playertoggle === "red"){
      fill(255, 0, 0);
      textAlign(CENTER);
      textSize(50);
      textFont("georgia");
      text("Red Wins!", width / 2, height / 3);
    }
    else {
      fill(0, 0, 255);
      textAlign(CENTER);
      textSize(50);
      textFont("georgia");
      text("Blue Wins!", width / 2, height / 3);
    }
  }
  console.log(ifWin);
}

function finalWinToggle(){
  if (playertoggle === "blue"){
    playertoggle = "red";
  }
  else {
    playertoggle = "blue";
  }
}