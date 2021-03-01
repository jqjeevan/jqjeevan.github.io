// Sets level true to start to prevent repeats due to draw loop
let levelPlay2 = true;

// Allows objects to stack to make level
const L2BOXS1 = [];
const L2BOXS2 = [];
const L2BOXS3 = [];
const L2BOXS4 = [];
const L2Stone1 = [];

function level2() {

  background(level2bg);

  if (levelPlay2 === true) {
    // Creates canvas and new mouse and world contraints for each level
    const theCanvas = createCanvas(screenWidth, screenHeight);
    const mouse = Mouse.create(theCanvas.elt);
    const options = {
      mouse: mouse
    };
    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    // Loop game level sound
    gameSound.loop();

    // Set false after level starts to prevent repeats
    levelPlay2 = false;

    // Set variables for non stack objects
    ground = new Ground(width / 2, 694, width, 80);
    bird = new Bird(200, 520, 20);
    slingshot = new SlingShot(200, 520, bird.body);
    pig = new Piggy(1000, 610, 30);

    // Variables for stack objects
    for (let i = 0; i < 3; i++) {
        L2BOXS1[i] = new Box(850, 400, 60, 60);
      }
    for (let i = 0; i < 3; i++) {
        L2BOXS2[i] = new Box(1150, 400, 60, 60);
      }
    for (let i = 0; i < 5; i++) {
        L2BOXS3[i] = new Box(789, 300, 60, 60);
      }
    for (let i = 0; i < 5; i++) {
        L2BOXS4[i] = new Box(1211, 300, 60, 60);
      }
    for (let i = 0; i < 2; i++) {
        L2Stone1[i] = new Stone(1000, 350, 360, 40);
      }
    }
    // opens function which shows object images
    showLevel2();
}

function showLevel2() {
  // Shows object images
  for (let box of L2BOXS1) {
      box.show();
    }
  for (let box of L2BOXS2) {
      box.show();
    }
  for (let box of L2BOXS3) {
      box.show();
    }
  for (let box of L2BOXS4) {
      box.show();
    }
  for (let Stone of L2Stone1) {
      Stone.show();
    }

  slingshot.show();
  image(slingshotImage, 170, 500, 70, 160);

  bird.show();
  pig.show();

  // Pushes pig to array to check if it was killed
  objectArray.push(pig);

  // Checks if pig is killed
  pigCheck();
}
