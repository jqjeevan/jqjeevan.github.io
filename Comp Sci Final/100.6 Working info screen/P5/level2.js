let levelPlay2 = true;

const L2BOXS1 = [];
const L2BOXS2 = [];
const L2BOXS3 = [];
const L2BOXS4 = [];
const L2Stone1 = [];

function level2() {

  background(level2bg);

    if (levelPlay2 === true) {
        levelPlay2 = false;
        gameSound.loop();

        bird = new Bird(200, 520, 20);

        slingshot = new SlingShot(200, 520, bird.body);

        pig = new Piggy(1000, 610, 30);

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
    showLevel2();
}

function showLevel2() {
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
    if (pigAlive === true){
        image(slingshotImage, 170, 500, 70, 160);
    }

    bird.show();
    pig.show();
    objectArray.push(pig);

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