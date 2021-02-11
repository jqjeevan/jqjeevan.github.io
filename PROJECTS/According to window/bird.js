class Bird {
  constructor(x, y, r) {
    const roptions = {
      restitution: 0.3555
    };
    this.body = Matter.Bodies.circle(x, y, r, roptions);
    Matter.Body.setMass(this.body, this.body.mass * 4);
    Matter.World.add(world, this.body);
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(birdImage, 0, 0, this.r * 3, this.r * 3);
    pop();
  }
}
