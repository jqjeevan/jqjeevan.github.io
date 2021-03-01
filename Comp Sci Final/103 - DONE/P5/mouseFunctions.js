function mousePressed(){

  // If the mouse is clicked over the mute button, will play sound and switch isMuted variable
  if (mouseX <= 1350 && mouseX >= 1265 && mouseY >= 32 && mouseY <= 120) {
    clickSound.play();
      if (isMuted === false){
          isMuted = true;
      }
      else {
          isMuted = false;
      }
  }

  // Mouse functions that work only on the menu screen
  if (whichScreen === "menu"){
    gameSound.stop();

    // Mouse clicks level 1
    if (mouseX >= 502 && mouseX <= 644 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      levelSelect.play();
      whichScreen = "level1"
    }
    // Mouse clicks level 2
    else if (mouseX >= 704 && mouseX <= 842 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      levelSelect.play();
      whichScreen = "level2"
    }
    // Mouse clicks level 3
    else if (mouseX >= 902 && mouseX <= 1043 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      levelSelect.play();
      whichScreen = "level3"
    }

    // Mouse clicks the bird icon to change bird images and bird used in game
    else if (mouseX >= 1287 && mouseX <= 1353 && mouseY >= 571 && mouseY <= 630){
      birdClickSound.play();
      if (whichBird === redBird){
        whichBird = blueBird;
      }
      else if (whichBird === blueBird){
        whichBird = yellowBird;
      }
      else if (whichBird === yellowBird){
        whichBird = blackBird;
      }
      else if (whichBird === blackBird){
        whichBird = redBird;
      }
    }
  }

  // if the pig is dead and the screen is on one of the levels, give option to click menu button
  if (whichScreen === "level1" || whichScreen === "level2" || whichScreen === "level3"){
    if (!pigAlive){
      if (mouseX >= 752 && mouseX <= 852 && mouseY >= 352 && mouseY <= 454){
        clickSound.play();
        whichScreen = "menu";
        pigAlive = true;
        menuPlay = true;
      }
    }
  }
}
