const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const BOXS1 = [];
const BOXS2 = [];
const BOXS3 = [];
const BOXS4 = [];
const GLASS1 = [];
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

  for (let i = 0; i < 3; i++) {
    BOXS1[i] = new Box(850, 400, 60, 60);
  }
  for (let i = 0; i < 3; i++) {
    BOXS2[i] = new Box(1150, 400, 60, 60);
  }
  for (let i = 0; i < 5; i++) {
    BOXS3[i] = new Box(789, 400, 60, 60);
  }
  for (let i = 0; i < 5; i++) {
    BOXS4[i] = new Box(1211, 400, 60, 60);
  }
  for (let i = 0; i < 2; i++) {
    GLASS1[i] = new Glass(1000, 350, 360, 40);
  }

  bird = new Bird(200, 520, 20);

  slingshot = new SlingShot(200, 520, bird.body);
  pig = new Piggy(1000, 610, 30);

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
  ground.show();
  for (let box of BOXS1) {
    box.show();
  }
  for (let box of BOXS2) {
    box.show();
  }
  for (let box of BOXS3) {
    box.show();
  }
  for (let box of BOXS4) {
    box.show();
  }
  for (let box of GLASS1) {
    box.show();
  }
  slingshot.show();
  image(slingshotImage, 170, 500, 70, 160);
  bird.show();
  pig.show();
  objectArray.push(pig);

 console.log(mouseX, mouseY);


  if (objectArray[0].body.positionImpulse.y !== 0) {
    World.remove(world, objectArray[0].body);
    textSize(40);
    stroke("white");
    strokeWeight(1);
    fill("red");
    text("You WIN!!!", width/2, height/2);
    pigAlive = false;
  }
}

