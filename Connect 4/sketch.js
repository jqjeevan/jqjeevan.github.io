// Grid Neighbors
// 1/26/2021

let grid = createEmptyGrid(7, 6);
let rows, cols, cellWidth, cellHeight;
let bgMusic;
let clickS;

function preload(){
  bgMusic = loadSound("assets/backgroundm.mp3");
  clickS = loadSound("assets/click.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusic.setVolume(0.3);
  bgMusic.loop();

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();
}

function createEmptyGrid(cols, rows){

  let empty = [];
  for (let y=0; y<rows; y++){
    empty.push([]);
    for (let x=0; x<cols; x++){
      empty[y].push(0);
    }
  }
  return empty;
}

function displayGrid(){

  for (let y=0; y<rows; y++){
    for (let x=0; x<cols; x++){
      if (grid[y][x] === 0){
        fill("purple");
      }
      if (grid[y][x] === 1){
        fill("blue");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed(){

  clickS.play();


  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  toggleCell(x, y);

}

function toggleCell(x, y){
  // check coordinates if in array (edges)
  if (x>=0 && x<cols && y>=0 && y<rows){
    if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
  }
}