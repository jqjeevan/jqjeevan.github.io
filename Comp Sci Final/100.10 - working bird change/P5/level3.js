let levelPlay3 = true;

const L3BOXS1 = [];
const L3BOXS2 = [];
const L3BOXS3 = [];
const L3BOXS4 = [];
const L3Stone1 = [];
let L3Stone2;
let L3Stone3;

function level3() {

background(level3bg);

    if (levelPlay3 === true) {
      const theCanvas = createCanvas(screenWidth, screenHeight);
      const mouse = Mouse.create(theCanvas.elt);
      const options = {
        mouse: mouse
      };
      mouse.pixelRatio = pixelDensity();
      mConstraint = MouseConstraint.create(engine, options);
      World.add(world, mConstraint);
  
        gameSound.loop();
        levelPlay3 = false;

        ground = new Ground(width / 2, 694, width, 80);
        bird = new Bird(200, 520, 20);
        slingshot = new SlingShot(200, 520, bird.body);
        pig = new Piggy(1000, 610, 30);

        for (let i = 0; i < 3; i++) {
            L3BOXS1[i] = new Box(850, 400, 60, 60);
          }
        for (let i = 0; i < 3; i++) {
            L3BOXS2[i] = new Box(1150, 400, 60, 60);
          }
        for (let i = 0; i < 5; i++) {
            L3BOXS3[i] = new Box(789, 400, 60, 60);
          }
        for (let i = 0; i < 5; i++) {
            L3BOXS4[i] = new Box(1211, 400, 60, 60);
          }
        for (let i = 0; i < 2; i++) {
            L3Stone1[i] = new Stone(1000, 350, 360, 40);
          }
        L3Stone2 = new Stone(743, 400, 30, 300);
        L3Stone3 = new Stone(1258, 400, 30, 300);
          
    }
    showLevel3();
}

function showLevel3() {
    for (let box of L3BOXS1) {
        box.show();
      }
    for (let box of L3BOXS2) {
        box.show();
      }
    for (let box of L3BOXS3) {
        box.show();
      }
    for (let box of L3BOXS4) {
        box.show();
      }
    for (let Stone of L3Stone1) {
        Stone.show();
      }
    L3Stone2.show();
    L3Stone3.show();
    

    slingshot.show();
    if (pigAlive === true){
        image(slingshotImage, 170, 500, 70, 160);
    }

    bird.show();
    pig.show();
    objectArray.push(pig);

    pigCheck();
}
