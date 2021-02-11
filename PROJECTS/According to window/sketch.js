const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
const boxy = [];

let ground;
let bird;
let world, engine;
let mouseRestriction;

let birdImage;
let boxImage;
let backgroundImage;

function preload() {
  backgroundImage = loadImage("assets/bg.jpg");
  birdImage = loadImage("assets/bird.png");
  boxImage = loadImage("assets/boxy.png");
}

function setup() {
  const myCanvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height/1.13, width, 20);
  for (let i = 0; i < 4; i++) {
    boxy[i] = new Box(windowWidth/1.8, windowHeight/5 - i * 50, windowWidth/12, windowWidth/12);
  }
  bird = new Bird(150, 300, 25);


  const mouse = Mouse.create(myCanvas.elt);
  const options = {
    mouse: mouse
  };

  // Stupid pixel density ugh...
  mouse.pixelRatio = pixelDensity();
  mouseRestriction = MouseConstraint.create(engine, options);
  World.add(world, mouseRestriction);
}

function keyPressed() {
  if (key === "r") {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, this.r*3);
  }
}

function draw() {
  background(backgroundImage);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxy) {
    box.show();
  }
  bird.show();
}
