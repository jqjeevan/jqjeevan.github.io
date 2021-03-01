class SlingShot {
  constructor(x, y, body) {
    const options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.02,
      length: 40
    };
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    if (mouseX<=145 && mouseY>=345){
      this.sling.bodyB = null;
    }
  }

  show() {
    if (this.sling.bodyB) {
      stroke(36, 24, 4);
      strokeWeight(12);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(180, 525, posB.x, posB.y);
      line(225, 528, posB.x, posB.y);
    }
  }

  attach(body) {
    this.sling.bodyB = body;
  }
}