let menuPlay = true;

function menuScreen() {
  // Prevents music from overlapping due to draw loop
  if (menuPlay === true){
    gameSound.stop();
    startSound.loop();
    menuPlay = false;
  }

  // Displays icons and angry birds text
  background(menuBackground);
  image(infoImage, 1260, 150, 90, 90);
  image(whichBird, 1270, 550, 90, 90);
  image(angryBirdText, width/4, 100, 800, 150);
  
  image(level1icon, 500, screenHeight/2, 150, 150);
  image(level2icon, screenWidth/2, screenHeight/2, 150, 150);
  image(level3icon, 900, screenHeight/2, 150, 150);

  // If mouse hovers over infobutton, displays information screen
  if (mouseX >= 1261 && mouseX <= 1345 && mouseY >= 151 && mouseY <= 235) {
    image(infoSheet, 350, 100, 800, 500);
  } 
}
