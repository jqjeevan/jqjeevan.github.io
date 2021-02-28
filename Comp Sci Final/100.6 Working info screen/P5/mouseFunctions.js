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
  if (whichScreen === "menu"){
    gameSound.stop();
  }
  // console.log(mouseX, mouseY);
}
