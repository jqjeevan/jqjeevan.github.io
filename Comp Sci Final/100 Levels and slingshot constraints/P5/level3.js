let levelPlay3 = true;

const L3BOXS1 = [];
const L3BOXS2 = [];
const L3BOXS3 = [];
const L3BOXS4 = [];
const L3GLASS1 = [];
let L3GLASS2;
let L3GLASS3;


function level3() {
    if (levelPlay3 === true) {
        levelPlay3 = false;

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
            L3GLASS1[i] = new Glass(1000, 350, 360, 40);
          }
        L3GLASS2 = new Glass(743, 400, 30, 300);
        L3GLASS3 = new Glass(1258, 400, 30, 300);

          
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
    for (let glass of L3GLASS1) {
        glass.show();
      }
    L3GLASS2.show();
    L3GLASS3.show();
    

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