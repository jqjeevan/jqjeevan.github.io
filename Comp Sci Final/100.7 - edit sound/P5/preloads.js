let birdImage;
let blockImage;
let slingshotImage;
let pigImage;
let stoneImage;

let menuBackground;
let level1bg;
let level2bg;
let level3bg;

let level1icon;
let level2icon;
let level3icon;

let muteImage;
let unmuteImage;
let infoImage;
let infoSheet;
let winMenu;

let startSound;
let gameSound;
let endSound;

function preload() {
    birdImage = loadImage('images/bird.png');
    blockImage = loadImage('images/boxy.png');
    slingshotImage = loadImage('images/slinger.png')
    pigImage = loadImage('images/pig.png');
    stoneImage = loadImage('images/stone.png');
    mousePic = loadImage('images/mouse.png');
    level1bg = loadImage('images/bg.jpg');
    level2bg = loadImage('images/levelA.png')
    level3bg = loadImage('images/levelB.png');
    menuBackground = loadImage('images/menuBackground.png')

    level1icon = loadImage('images/level1icon.png');
    level2icon = loadImage('images/level2icon.png');
    level3icon = loadImage('images/level3icon.png');

    muteImage = loadImage('images/mute.png');
    unmuteImage = loadImage('images/unmute.png');
    infoImage = loadImage('images/info.png');
    infoSheet = loadImage('images/infosheet.png');
    winMenu = loadImage('images/winer.png');

    startSound = loadSound('sounds/loadscreensound.wav');
    gameSound = loadSound('sounds/gamesound.mp3');
    endSound = loadSound('sounds/endgamesound.mp3');
  }