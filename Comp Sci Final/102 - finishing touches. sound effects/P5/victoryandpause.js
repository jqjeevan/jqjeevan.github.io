function pigCheck() {
    if (objectArray[0].body.positionImpulse.y !== 0) {
        World.remove(world, objectArray[0].body);
        World.clear(engine.world);
        if (pigAlive){
          victorySound.play();
        }
        pigAlive = false;
        if (!pigAlive) {
          winnerScreen = image(winMenu, 400, 100);
          gameSound.stop();
        }
        objectArray = [];
    }
}