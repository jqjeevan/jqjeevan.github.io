class Ground extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.body.label = "Ground";
    this.body.isStatic = true;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(30, 60, 20, 0);
    fill("black");
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}