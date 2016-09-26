var noisescale = 173;
var canvas;
var c1, c2;
var jitter = [	[ -noisescale, 0, -noisescale, noisescale, 0, 0 ],
				[ 0, noisescale, -noisescale, noisescale, noisescale, 0 ],
				[ noisescale, 0, noisescale, -noisescale, 0, -noisescale ],
				[ 0, -noisescale, noisescale, 0, -noisescale, -noisescale ],
				[ noisescale, 0, noisescale, -noisescale, noisescale, 0 ], 
				[ 0, noisescale, -noisescale, 0, noisescale, noisescale, 0] ];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  c1 = color(199, 102, 33);
  c2 = color(0, 102, 255);
  
  noLoop();
}

function draw() {	
	img = createImage(window.innerWidth, window.innerHeight);
	img.loadPixels();
	for( var x = 0; x < window.innerWidth; x++) {
		for (var y = 0; y < window.innerHeight; y++) {
			var sx = Math.min(window.innerWidth, Math.max(0, x + jitter[x % 6][y % 6]));
			sx = Math.min(window.innerWidth, Math.max(0, sx + random(-noisescale, noisescale)));
			//var sx = x;
			var inter = map(sx, 0, window.innerWidth, 0, 1);
			var c = lerpColor(c1, c2, inter);
			img.set(x, y, c);
		}
	}
	img.updatePixels();
  
	image(img, 0, 0);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}