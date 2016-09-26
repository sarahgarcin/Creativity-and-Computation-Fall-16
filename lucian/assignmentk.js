var canvas;
var theta = 0.0;
var amplitude = 20;

function setup() {  
	canvas = createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
}

function draw() {	
	background(0);
	theta += 0.1;
	for( var x = 0; x < 30; x++) {
		for (var y = 0; y < 30; y++) {
			var offset = sin(theta + y) * amplitude;
			var newcolor = map(offset, -amplitude, amplitude, 0, 255);
			fill(newcolor, newcolor, 255);
			ellipse(x * 30 + offset, y * 30, 5, 5);
		}
	}

}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}