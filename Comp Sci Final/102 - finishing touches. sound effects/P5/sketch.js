const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let bird;
let world, engine;
let mConstraint;
let slingshot;
let objectArray = [];
let birdImage;

let whichScreen = "menu";
let pigAlive = true;

let screenWidth = 1400;
let screenHeight = 750;

function setup() {
  const theCanvas = createCanvas(screenWidth, screenHeight);

  engine = Engine.create();
  world = engine.world;

  birdImage = redBird;
}

function draw() {

  cursor("cursors/cursorc.cur");
  if (mouseIsPressed) {
    cursor("cursors/mcursor.cur");
  }

  Matter.Engine.update(engine);

  screenSwitch(); 

  if (isMuted){
    isMutedButton = image(unmuteImage, 1270, 40, 80, 80);
    masterVolume(0.0, 0.15);
  }
  else if (!isMuted) {
    isMutedButton = image(muteImage, 1270, 40, 80, 80);
    masterVolume(1.0, 0.15);
  }
}

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

function keyPressed() {
  if (key === ' ') {
    World.remove(world, bird.body);
    bird = new Bird(200, 560, 20);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  if (whichScreen === "level1" || whichScreen === "level2" || whichScreen === "level3"){
    setTimeout(() => {
      slingshot.fly();
    }, 100);
  }
}