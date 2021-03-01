// Creates class for the slingshot object
class SlingShot {
  constructor(x, y, body) {

    // Sets object property values such as stiffness and positioning of sling
    const options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.02,
      length: 40
    };

    // Creates contraint and adds object to world
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  // Bird can only can be released if the bird is released behind the slingshot
  fly() {
    if (mouseX<=145 && mouseY>=345){
      this.sling.bodyB = null;
    }
  }

  // Shows the slingshot (sling) lines
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

  // Attaches bird body to slingshot contraint
  attach(body) {
    this.sling.bodyB = body;
  }
}