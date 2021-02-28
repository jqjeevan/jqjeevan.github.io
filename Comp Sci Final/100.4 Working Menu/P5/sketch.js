const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let bird;
let world, engine;
let mConstraint;
let slingshot;
let isPigDead = false;
let objectArray = [];

let whichScreen = "menu";

let screenWidth = 1400;
let screenHeight = 750;

function setup() {
  const theCanvas = createCanvas(screenWidth, screenHeight);

  if (whichScreen === "menu"){
    startSound.loop();
  }

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, 694, width, 80);

  const mouse = Mouse.create(theCanvas.elt);
  const options = {
    mouse: mouse
  };
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
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

function draw() {
  cursor("cursors/cursorc.cur");
  if (mouseIsPressed) {
    cursor("cursors/mcursor.cur");
  }
  Matter.Engine.update(engine);

  screenSwitch(); 

  if (isMuted){
    isMutedButton = image(unmuteImage, 1270, 40, 80, 80);
    masterVolume(0.0);
}
else if (!isMuted) {
    isMutedButton = image(muteImage, 1270, 40, 80, 80);
    masterVolume(1.0);
}
}

function mousePressed(){

  if (mouseX <= 1350 && mouseX >= 1265 && mouseY >= 32 && mouseY <= 120) {
      if (isMuted === false){
          isMuted = true;
      }
      else {
          isMuted = false;
      }
  }

  if (whichScreen === "menu"){
    if (mouseX >= 502 && mouseX <= 644 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      whichScreen = "level1"
    }
    else if (mouseX >= 704 && mouseX <= 842 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      whichScreen = "level2"
    }
    else if (mouseX >= 902 && mouseX <= 1043 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      whichScreen = "level3"
    }
  }
  if (whichScreen === "menu"){
    gameSound.stop();
  }
}

function screenSwitch(){
  if (whichScreen === "menu"){
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