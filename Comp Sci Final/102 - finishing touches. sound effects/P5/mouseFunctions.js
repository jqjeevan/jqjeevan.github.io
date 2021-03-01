function mousePressed(){

  if (mouseX <= 1350 && mouseX >= 1265 && mouseY >= 32 && mouseY <= 120) {
    clickSound.play();
      if (isMuted === false){
          isMuted = true;
      }
      else {
          isMuted = false;
      }
  }

  if (whichScreen === "menu"){
    gameSound.stop();
    if (mouseX >= 502 && mouseX <= 644 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      levelSelect.play();
      whichScreen = "level1"
    }
    else if (mouseX >= 704 && mouseX <= 842 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      levelSelect.play();
      whichScreen = "level2"
    }
    else if (mouseX >= 902 && mouseX <= 1043 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      levelSelect.play();
      whichScreen = "level3"
    }
    else if (mouseX >= 1287 && mouseX <= 1353 && mouseY >= 571 && mouseY <= 630){
      birdClickSound.play();
      if (birdImage === redBird){
        birdImage = blueBird;
      }
      else if (birdImage === blueBird){
        birdImage = yellowBird;
      }
      else if (birdImage === yellowBird){
        birdImage = blackBird;
      }
      else if (birdImage === blackBird){
        birdImage = redBird;
      }
    }
  }

  // Victory Screen
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
