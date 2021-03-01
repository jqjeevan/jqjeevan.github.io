// Sets level true to start to prevent repeats due to draw loop
let levelPlay1 = true;

// Allows objects to stack to make level
const L1BOXS1 = [];
const L1BOXS2 = [];
const L1Stone1 = [];

function level1() {

  background(level2bg);

  if (levelPlay1 === true) {

    // Creates canvas and new mouse and world contraints for each level
    const theCanvas = createCanvas(screenWidth, screenHeight);
    const mouse = Mouse.create(theCanvas.elt);
    const options = {
      mouse: mouse
    }
    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    // Loop game level sound
    gameSound.loop();

    // Set false after level starts to prevent repeats
    levelPlay1 = false;

    // Set variables for non stack objects
    ground = new Ground(width / 2, 694, width, 80);
    bird = new Bird(200, 520, 20);
    slingshot = new SlingShot(200, 520, bird.body);
    pig = new Piggy(1000, 610, 30);

    // Variables for stack objects
    for (let i = 0; i < 2; i++) {
      L1BOXS1[i] = new Box(850, 400, 60, 60);
      }
    for (let i = 0; i < 2; i++) {
      L1BOXS2[i] = new Box(1150, 400, 60, 60);
      }

    for (let i = 0; i < 1; i++) {
      L1Stone1[i] = new Stone(1000, 350, 360, 40);
      }
    }
  // opens function which shows object images
  showLevel1();
}

function showLevel1() {
  // Shows object images
  for (let box of L1BOXS1) {
    box.show();
    }
  for (let box of L1BOXS2) {
    box.show();
    }
  for (let Stone of L1Stone1) {
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