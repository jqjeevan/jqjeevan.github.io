let birdImage;
let blockImage;
let backgroundImage;
let slingshotImage;
let pigImage;
let glassImage;
let loadScreenImage;

let startSound;
let gameSound;
let endSound;

function preload() {
    birdImage = loadImage('images/bird.png');
    blockImage = loadImage('images/boxy.png');
    backgroundImage = loadImage('images/bg.jpg');
    slingshotImage = loadImage('images/slinger.png')
    pigImage = loadImage('images/pig.png');
    glassImage = loadImage('images/glass.png');
    loadScreenImage = loadImage('images/openscreen.jpg');

    startSound = loadSound('sounds/loadscreensound.wav');
    gameSound = loadSound('sounds/gamesound.mp3');
    endSound = loadSound('sounds/endgamesound.mp3');
  }