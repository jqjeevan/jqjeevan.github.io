// Creates a class for ground using inheritance from the box class
class Ground extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);

    // Sets ground to be static so gravity doesnt apply
    this.body.isStatic = true;
  }

  // // Code can be used to display ground color if neeeded or if there is a moving ground in future levels
  // show() {
  //   const pos = this.body.position;
  //   const angle = this.body.angle;
  //   push();
  //   translate(pos.x, pos.y);
  //   rotate(angle);
  //   noStroke();
  //   fill(30, 60, 20, 0);
  //   fill("black");
  //   rectMode(CENTER);
  //   rect(0, 0, this.w, this.h);
  //   pop();
  // }
}