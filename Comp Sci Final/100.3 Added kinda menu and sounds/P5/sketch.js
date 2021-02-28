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

  whichScreen = "level1";
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  cursor("cursors/cursorc.cur");
  if (mouseIsPressed) {
    cursor("cursors/mcursor.cur");
  }
  Matter.Engine.update(engine);

  // menuScreen();
  // level1();
  level2();
  // level3();

  // console.log(mouseX, mouseY); 
}

