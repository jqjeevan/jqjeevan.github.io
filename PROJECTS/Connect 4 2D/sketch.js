// Jeevan Prakash
// February 8, 2021
// Computer Science 30
// Grid/2D Array Assignment - Connect 4 (Without Gravity)
// Mr. Schellenberg

// Constants used for the array and used to determine the height and width of circles in array
const ROWS = 7;
const COLS = 8;

// Variables used in the program
let grid, cellWidth, cellHeight;
let player = false;
let playertoggle = "blue";
let click;
let bgmusic;
let endImage;
let ifWin = 0;
let whichScreen = 1;

// Preloads 2 sounds and an image for the end screen
function preload(){
  click = loadSound("assets/click.wav");
  bgmusic = loadSound("assets/backgroundmusic.mp3");
  endImage = loadImage("assets/winscreen.gif");
}

function setup() {
  // Starts playing the background sound
  bgmusic.loop();

  // Loads canvas in the middle of screen
  let myCanvas = createCanvas(windowWidth*0.7, windowHeight*0.8);
  myCanvas.position(windowWidth*0.15, windowHeight*0.1);

  // Defines the grid, and determines the cell(circle) width
  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;
}

function draw() {
  // If whichScreen is set as 1, it calls the playScreen function which plays the game
  if (whichScreen === 1){
    playScreen();

  }
  // After the game is won, whichScreen is set at 2 which ends the game
  else if (whichScreen === 2){
    endScreen();
  }
}

// Sets the background for the game screen, displays the grid, and starts the wincheck function
function playScreen() {
  background(102, 0, 102, 0);
  displayGrid();
  winCheck();
}

function endScreen() {
  // Changes background to the gif image
  background(endImage);

  // If the ifWin Variable is changed to a 1, then it will check who won
  if (ifWin === 1) {
    // If player toggle (which changes after every click) is red, say red wins
    if (playertoggle === "red"){
      fill(255, 0, 0);
      textAlign(CENTER);
      textSize(50);
      textFont("georgia");
      text("RED WINS! Press Ctrl+r to restart", width / 2, height / 2);
    }
    // If its not red it will be blue, so it will display blue wins
    else {
      fill(0, 0, 255);
      textAlign(CENTER);
      textSize(50);
      textFont("georgia");
      text("BLUE WINS! Press Ctrl+r to restart", width / 2, height / 2);
    }
  }
}

function mousePressed() {
  // Used to define the x and y vlaue which is used to determine which color the cell(circle) will be
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  // Fills the cell with the color determined by the array value
  changePlayer(x, y);

  // When mouse pressed a sound is made
  click.play();

  // Switches the player color string to be used to say who wins in endScreen
  finalWinToggle();
}

function displayGrid() {
  // Draws tha grid circles, and according to what the grid x and y are assigned, fills the color
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

// Creates an empty grid used for the displaygrid
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

// Used to determine the grid value which then changes the color
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

// Checks the array for a connect 4, if it does the ifWIn value is changed to 1, which starts the end screen
function winCheck() {
  // Checks Horizonatal
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
  
  // Checks Vertical
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
  
  // Checks Diagonal
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
  
  // Checks Antidiagonal
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
    whichScreen = 2;
  }
}

// Toggles red or blue for final win screen
function finalWinToggle(){
  if (playertoggle === "blue"){
    playertoggle = "red";
  }
  else {
    playertoggle = "blue";
  }
}