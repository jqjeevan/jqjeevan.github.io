// Object images for levels
let blockImage;
let slingshotImage;
let pigImage;
let stoneImage;

// Backgrounds for each screen
let menuBackground;
let level1bg;
let level2bg;
let level3bg;

// Icons/images on menu screen
let level1icon;
let level2icon;
let level3icon;
let muteImage;
let unmuteImage;
let infoImage;
let infoSheet;
let winMenu;
let angryBirdText;

// Options for choosing bird
let redBird;
let blueBird;
let yellowBird;
let blackBird;

// Sound variables
let startSound;
let gameSound;
let endSound;
let levelSelect;
let victorySound;
let clickSound;
let birdClickSound;

// Loads all images
function preload() {

    blockImage = loadImage('images/boxy.png');
    slingshotImage = loadImage('images/slinger.png')
    pigImage = loadImage('images/pig.png');
    stoneImage = loadImage('images/stone.png');

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
    angryBirdText = loadImage('images/text.png');

    redBird = loadImage('images/birdred.png');
    yellowBird = loadImage('images/birdyellow.png');
    blueBird = loadImage('images/birdblue.png');
    blackBird = loadImage('images/birdblack.png');

    startSound = loadSound('sounds/loadscreensound.mp3');
    gameSound = loadSound('sounds/gamesound.mp3');
    endSound = loadSound('sounds/endgamesound.mp3');
    levelSelect = loadSound('sounds/levelselect.mp3');
    victorySound = loadSound('sounds/winsong.mp3');
    clickSound = loadSound('sounds/click.wav');
    birdClickSound = loadSound('sounds/birdclick.mp3');
  }