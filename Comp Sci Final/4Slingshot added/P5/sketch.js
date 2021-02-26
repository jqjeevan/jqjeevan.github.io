const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const BOXS = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

let birdImage;
let blockImage;
let backgroundImage;
let slingshotImage;

let objectArray = [];

function preload() {
  birdImage = loadImage('images/bird.png');
  blockImage = loadImage('images/boxy.png');
  backgroundImage = loadImage('images/bg.jpg');
  slingshotImage = loadImage('images/slinger.png')
}

function setup() {
  const theCanvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height/1.13, width, 20);
  for (let i = 0; i < 4; i++) {
    BOXS[i] = new Box(windowWidth/1.2, 300 - i * 75, 100, 100);
  }
  bird = new Bird(200, 520, 25);

  slingshot = new SlingShot(200, 520, bird.body);


  const mouse = Mouse.create(theCanvas.elt);
  const options = {
    mouse: mouse
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

// Collide engine on
  // Matter.Events.on(engine, "collisionStart", collision);
}

function keyPressed() {
  if (key === 'r') {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(backgroundImage);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of BOXS) {
    box.show();
  }
  slingshot.show();
  image(slingshotImage, 170, 500, 70, 160);
  bird.show();

}