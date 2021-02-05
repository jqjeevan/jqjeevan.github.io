const ROWS = 7;
const COLS = 8;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let playerColor = "blue";
let player = false;
let playerPos;
let click;
let bgmusic;

function preload(){
  soundFormats("wav", "flac");
  click = loadSound("assets/click.wav");
  bgmusic = loadSound("assets/bg.flac");
}

function setup() {
  let myCanvas = createCanvas(windowWidth*0.5, windowHeight*0.8);
  myCanvas.position(windowWidth*0.25, windowHeight*0.1);

  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;

  background(102, 0, 102, 0);
}

function draw() {
  bgmusic.loop();

  playerPos = floor(mouseX/cellWidth);


  displayGrid();

  highlightSqaure();
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

function highlightSqaure(x, y) {
  if (mouseX === x*cellWidth && mouseY === y*cellHeight) {
    fill("black");
  }
}
