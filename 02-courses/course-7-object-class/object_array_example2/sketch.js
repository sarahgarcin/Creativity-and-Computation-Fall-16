var giz = [];
var number = 10;
 
function setup () {
  createCanvas(320, 240);
  background (0);
  stroke (255);
   
  for (var i=0; i < number; i++) {
    var x = random (width);
    var y = random (height);
    giz[i] = new Gizmo (x, y);
  }
}

 
function draw () {
  noStroke ();
  fill (0, 2);
  rect (0, 0, width, height);
   
  stroke (255);
  for (var i=0; i < number; i++) {
    giz[i].move();
    point (giz[i].position.x, giz[i].position.y);
  }
}

function Gizmo(x, y){
   
  this.x = x; 
  this.y = y; 
  this.position = createVector(this.x, this.y);
  this.direction = createVector(random (-1, 1), random (-1, 1));
  this.spin = 0.15;
   
   
  this.move = function() {
    this.direction.x += random (-this.spin, this.spin);
    this.direction.y += random (-this.spin, this.spin);
    this.direction.normalize ();
    this.position.add (this.direction);
     
    if (this.position.x < 0 || this.position.x > width) {
      this.direction.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.direction.y *= -1;
    }
  }
}
