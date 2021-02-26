const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
let timer = 3;
let ground;
const BOXS1 = [];
const BOXS2 = [];
const GLASS1 = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

let whichScreen = 0;

let isPigDead = false;

let objectArray = [];

function setup() {
  const theCanvas = createCanvas(1400, 750);

  engine = Engine.create();
  world = engine.world;


  if (whichScreen===1){
    ground = new Ground(width / 2, height/1.13, width, 20);

    for (let i = 0; i < 3; i++) {
      BOXS1[i] = new Box(850, 300 - i * 75, 100, 100);
    }
    for (let i = 0; i < 3; i++) {
      BOXS2[i] = new Box(1150, 300 - i * 75, 100, 100);
    }
    for (let i = 0; i < 2; i++) {
      GLASS1[i] = new Glass(1000, 200, 400, 40);
    }

    bird = new Bird(200, 520, 25);

    slingshot = new SlingShot(200, 520, bird.body);
    pig = new Piggy(1000, 610, 40);


    const mouse = Mouse.create(theCanvas.elt);
    const options = {
      mouse: mouse
    };

    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
  }
}

function keyPressed() {
  if (key === 'r') {
    World.remove(world, bird.body);
    bird = new Bird(200, 560, 25);
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

  startSound.loop();
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer === 0) {
    text("GAME OVER", width/2, height*0.7);
  }

  if (whichScreen === 0){
    background(loadScreenImage);
  }
  // if (whichScreen === 1) {
  //   background(backgroundImage);
  // }

  Matter.Engine.update(engine);
  ground.show();
  for (let box of BOXS1) {
    box.show();
  }
  for (let box of BOXS2) {
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

  if (objectArray[0].body.positionImpulse.y !== 0) {
    World.remove(world, objectArray[0].body);
    textSize(40);
    fill("red");
    text("You WIN!!!", width/2, height/2);
  }
}

