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
let pigImage;
let level = "level1";

let objectArray = [];

function preload() {
  birdImage = loadImage('images/bird.png');
  blockImage = loadImage('images/boxy.png');
  backgroundImage = loadImage('images/bg.jpg');
  slingshotImage = loadImage('images/slinger.png')
  pigImage = loadImage('images/pig.png');
}

function setup() {
  const theCanvas = createCanvas(1400, 750);

  engine = Engine.create();
  world = engine.world;



  const mouse = Mouse.create(theCanvas.elt);
  const options = {
    mouse: mouse,
  }

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

// Collide engine on
  // Matter.Events.on(engine, "collisionStart", collision);
}

function keyPressed() {
  // if (key === 'r') {
  //   World.remove(world, bird.body);
  //   bird = new Bird(150, 300, 25);
  //   slingshot.attach(bird.body);
  // }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(backgroundImage);
  Matter.Engine.update(engine);

  if (level === "level1") {
  bird = new Bird(200, 520, 25);
  slingshot = new SlingShot(200, 520, bird.body);
  pig = new Piggy(800, 610, 40);
  box = new Box(500, 620, 40, 40);

  slingshot.show();
  image(slingshotImage, 170, 500, 70, 160);

  box.show();
  bird.show();
  pig.show();

  // objectArray.push(box);
  // objectArray.push(new Ground(width / 2, height/1.13, width, 20));

  // objectArray.push(new SlingShot(200, 520, bird.body));
  // objectArray.push(new Piggy(800, 200, 40));
  }

}