class SlingShot {
  constructor(x, y, body) {
    const options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.02,
      length: 30
    };
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    // if (mouseX<=215 && mouseX>=186 && mouseY<=534  && mouseY>=568){
    this.sling.bodyB = null;
    // }
  }

  show() {
    if (this.sling.bodyB) {
      stroke(62, 37, 20);
      strokeWeight(15);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }

  attach(body) {
    this.sling.bodyB = body;
  }
}