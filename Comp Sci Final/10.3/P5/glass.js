
class Glass {
  constructor(x, y, w, h) {
    const options = {
      restitution: -0.1
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    this.body.friction = 0.1;
    Matter.Body.setMass(this.body, this.body.mass * 2);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(glassImage, 0, 0, this.w, this.h);
    pop();
  }
}