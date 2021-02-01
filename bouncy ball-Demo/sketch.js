// Bouncing Balls Array Demo

let bouncingBalls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  moveBall();
  displayBall();
}

function mousePressed(){
  let ball = {
    x: mouseX,
    y: mouseY,
    diameter: random(25,100),
    dx: random(-5,5),
    dy: random(-5,5),
    tcolor: color(random(255), random(255), random(255), random(255)),
  };
  bouncingBalls.push(ball);
}

function moveBall(){
  for (let ball of bouncingBalls){

    ball.x += ball.dx;
    ball.y += ball.dy;
  
    // check bounce
  
    if(ball.x + ball.diameter/2 >= width || ball.x - ball.diameter/2<=0){
      ball.dx *= -1;
    }
    else if(ball.y + ball.diameter/2 >= height || ball.y - ball.diameter/2<=0){
      ball.dy *= -1;
    }
  }
}

function displayBall(){
  for (let i=0; i<bouncingBalls.length; i++){
    noStroke();
    fill(bouncingBalls[i].tcolor);
    ellipse(bouncingBalls[i].x, bouncingBalls[i].y, bouncingBalls[i].diameter, bouncingBalls[i].diameter);
  }
}