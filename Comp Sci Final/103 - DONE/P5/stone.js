// Creates class for the stone object
class Stone {
  constructor(x, y, w, h) {

    // Sets restitution(bounciness) of body
    const options = {
      restitution: 0
    };

    // Creates data set for the object including mass, friction and adds it to world
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    this.body.friction = 1.5;
    Matter.Body.setMass(this.body, this.body.mass * 2);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  // displays stone and image can rotate based on the body position
  show() {
    // Only displays when the pig object is alive
    if (pigAlive) {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      rectMode(CENTER);
      imageMode(CENTER);
      image(stoneImage, 0, 0, this.w, this.h);
      pop();
    }
  }
}