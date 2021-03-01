// Adds 'Matter' to the following variables making code cleaner
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

// Variables used for images
let ground;
let bird;
let slingshot;
let whichBird;

// Matter js engine and mouse contraint variables
let world, engine;
let mConstraint;

// Variables used for game function
let whichScreen = "menu";
let pigAlive = true;
let isMuted = false;
let objectArray = [];

// Sets the canvas width and height
let screenWidth = 1400;
let screenHeight = 750;

function setup() {
  // Sets up canvas
  const theCanvas = createCanvas(screenWidth, screenHeight);
  
  // Creates an engine and world
  engine = Engine.create();
  world = engine.world;

  // Sets bird variable to a red bird at start
  whichBird = redBird;
}

function draw() {

  // Custom cursor for game and changes while mouse is pressed
  cursor("cursors/cursorc.cur");
  if (mouseIsPressed) {
    cursor("cursors/mcursor.cur");
  }

  // Updates/runs the matter js engine
  Matter.Engine.update(engine);

  // Checks for whichScreen variable which allows level selection
  screenSwitch(); 

  // If mute button is pressed, isMuted variable changes master volume of code
  if (isMuted){
    isMutedButton = image(unmuteImage, 1270, 40, 80, 80);
    masterVolume(0.0, 0.15);
  }
  else if (!isMuted) {
    isMutedButton = image(muteImage, 1270, 40, 80, 80);
    masterVolume(1.0, 0.15);
  }
}

// Checks whichScreen variable and changes based on the variable
function screenSwitch(){
  if (whichScreen === "menu"){
    pigAlive = true;
    menuScreen();
  }
  else if (whichScreen === "level1"){
    level1();
  } 
  else if (whichScreen === "level2"){
    level2();
  } 
  else if (whichScreen === "level3"){
    level3();
  } 
}

// If space key pressed it will reset the bird to slingshot constraint
function keyPressed() {
  if (key === ' ') {
    World.remove(world, bird.body);
    bird = new Bird(200, 560, 20);
    slingshot.attach(bird.body);
  }
}

// When mouse relased, set a timeout to wait, allowing the bird to gain momentum and fly
function mouseReleased() {
  if (whichScreen === "level1" || whichScreen === "level2" || whichScreen === "level3"){
    setTimeout(() => {
      slingshot.fly();
    }, 100);
  }
}