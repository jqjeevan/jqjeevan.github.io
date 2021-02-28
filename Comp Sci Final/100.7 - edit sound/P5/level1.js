let levelPlay1 = true;

const L1BOXS1 = [];
const L1BOXS2 = [];
const L1Stone1 = [];

function level1() {

  background(level2bg);
    if (!pigAlive) {
      image(winMenu, 400, 100);
    }
    if (levelPlay1 === true) {
      const theCanvas = createCanvas(screenWidth, screenHeight);
      const mouse = Mouse.create(theCanvas.elt);
      const options = {
        mouse: mouse
      }
      mouse.pixelRatio = pixelDensity();
      mConstraint = MouseConstraint.create(engine, options);
      World.add(world, mConstraint);


        gameSound.loop();
        levelPlay1 = false

        ground = new Ground(width / 2, 694, width, 80);

        bird = new Bird(200, 520, 20);
        slingshot = new SlingShot(200, 520, bird.body);
        pig = new Piggy(1000, 610, 30);

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
    showLevel1();
}

function showLevel1() {
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
    if (pigAlive === true){
        image(slingshotImage, 170, 500, 70, 160);
    }

    bird.show();
    pig.show();
    objectArray.push(pig);

    if (objectArray[0].body.positionImpulse.y !== 0) {
        World.remove(world, objectArray[0].body);
        World.clear(engine.world);
        textSize(40);
        stroke("white");
        strokeWeight(1);
        fill("red");
        pigAlive = false;
    }
}