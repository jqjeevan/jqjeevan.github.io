let isMuted = false;
let isMutedButton;
let button1;
let button2;
let button3;
let muteButton;
let infoOn = false;

function menuScreen() {
    background(menuBackground);

    image(infoImage, 1260, 150, 90, 90);
    
    image(level1icon, 500, screenHeight/2, 150, 150);
    image(level2icon, screenWidth/2, screenHeight/2, 150, 150);
    image(level3icon, 900, screenHeight/2, 150, 150);

    if (mouseX >= 1261 && mouseX <= 1345 && mouseY >= 151 && mouseY <= 235) {
        image(infoSheet, 350, 100, 800, 500);
      } 
}
