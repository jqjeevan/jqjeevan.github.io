function pigCheck() {
  // If statement triggers if the pig from the object Array was hit
  if (objectArray[0].body.positionImpulse.y !== 0) {

    // Removes objects from the world and clears the engine
    World.remove(world, objectArray[0].body);
    World.clear(engine.world);

    // Plays sound before pigAlive is false to prevent repeated/overlapping sound
    if (pigAlive){
      victorySound.play();
    }
    // Pig is false/dead
    pigAlive = false;

    // Opens menu image and stops the game sound
    if (!pigAlive) {
      image(winMenu, 400, 100);
      gameSound.stop();
    }
    // Clears object Array so it can be used for other levels
    objectArray = [];
    }
}