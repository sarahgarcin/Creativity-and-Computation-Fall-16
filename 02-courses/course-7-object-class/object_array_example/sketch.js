var balls = [] ;
var number = 400;

function setup() {
  createCanvas(640, 480);
  smooth();
  for (var i=0; i<number; i++) {
    balls[i] = new Ball(random(width), random(height));
  }
  noStroke();
}
 
function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
 
  for (var i=0; i<number; i++) {
    balls[i].run();
  }
}
 
function Ball(x, y) {
  this.xpos = x;
  this.ypos = y;
  this.xspeed = random(-4, 4);
  this.yspeed = random(-4, 4);

  this.run = function() {
    this.display();
    this.update();
    this.checkWalls();
  }
 
  this.display = function() {
    fill(255);
    ellipse(this.xpos, this.ypos, 10, 10);
  }
  this.update = function() {
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
  }
  this.checkWalls= function() {
    if (this.xpos >= width-5 || this.xpos <= 5) {
      this.xspeed *= -1;
    }
    else if (this.ypos >=height-5 || this.ypos <=5) {
      this.yspeed *= -1;
    }
  }
}