function mousePressed(){

  if (mouseX <= 1350 && mouseX >= 1265 && mouseY >= 32 && mouseY <= 120) {
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
      whichScreen = "level1"
    }
    else if (mouseX >= 704 && mouseX <= 842 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      whichScreen = "level2"
    }
    else if (mouseX >= 902 && mouseX <= 1043 && mouseY >= 378 && mouseY <= 519){
      startSound.stop();
      whichScreen = "level3"
    }
  }
  console.log(pigAlive);

  if (whichScreen === "level1" || whichScreen === "level2" || whichScreen === "level3"){
    if (!pigAlive){
      if (mouseX >= 752 && mouseX <= 852 && mouseY >= 352 && mouseY <= 454){
        whichScreen = "menu";
      }
  }
  }
}
