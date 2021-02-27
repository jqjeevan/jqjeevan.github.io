const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;

let bird;
let world, engine;
let mConstraint;
let slingshot;

let birdImage;
let blockImage;
let backgroundImage;
let slingshotImage;
let pigImage;
let glassImage;
let mousePic;

let isPigDead = false;

let objectArray = [];

function preload() {
  birdImage = loadImage('images/bird.png');
  blockImage = loadImage('images/boxy.png');
  backgroundImage = loadImage('images/bg.jpg');
  slingshotImage = loadImage('images/slinger.png')
  pigImage = loadImage('images/pig.png');
  glassImage = loadImage('images/glass.png');
  mousePic = loadImage('images/mouse.png');
}

function setup() {
  const theCanvas = createCanvas(1400, 750);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height/1.13, width, 20);

  const mouse = Mouse.create(theCanvas.elt);
  const options = {
    mouse: mouse
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key === 'r') {
    World.remove(world, bird.body);
    bird = new Bird(200, 560, 20);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {

  cursor("images/cursorc.cur");
  if (mouseIsPressed) {
    cursor("images/mcursor.cur");
  }
  
  background(backgroundImage);
  Matter.Engine.update(engine);

  // level1();
  // level2();
  level3();

  console.log(mouseX, mouseY); 
}

