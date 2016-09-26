var canvas;
var cearth, cearthline, cdirt, cmud, crain, cwave;
var worldwidth, worldheight;
var world;


function cell(_z, _water, _rain) {
	this.z = _z;
	this.water = _water;
	this.rain = int(_rain);
	this.mud = 0;
}

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	cearth = color(100, 80, 50);
	cearthline = color(50, 40, 33);
	cdirt = color(180, 140, 90);
	cmud = color(160, 120, 80);
	crain = color(32, 120, 255, 192);
	cwave = color(135, 200, 255, 192);
	
	worldwidth = 50;
	worldheight = 25;
	
	world = new Array(worldwidth);
	for( var x = 0; x < worldwidth; x++) {
		world[x] = new Array(worldheight);
		for (var y = 0; y < worldheight; y++) {
			world[x][y] = new cell((10 + random(2)) * x / 8.0, 2, random(170, 175));
		}
	}
	
	frameRate(15);
}

function draw() {	
	background(0);
	noSmooth();
	for (var x = 0; x < worldwidth; x++) {
		for (var y = 0; y < worldheight; y++) {
		
			w = world[x][y];
			ox = 200;
			oy = 150;
			
			height = w.z;
			gx = int(ox + 20 * x);
			gy = int(oy + 12 * (y + 1));
			
			strokeWeight(1);
			
			stroke(cearthline);
			fill(cearth);
			rect(gx, gy - height + 12, 20, height);
			
			stroke(cearth);
			if (world[x][y].mud > 0)
			{
				fill(cmud);
			}
			else
			{
				fill(cdirt);
			}
			rect(gx, gy - height, 20, 12);
			
			if (world[x][y].water > 0)
			{
				strokeWeight(0);
				fill(color(32, 105, 255, max(min(float(w.water) * 24, 255), 48)));
				rect(gx, gy - height - w.water, 20, 12 + w.water);
				
				world[x][y].mud = 60;
				blockUpdate(x, y, x, y - 1);
				blockUpdate(x, y, x, y + 1);
				blockUpdate(x, y, x + 1, y);
				blockUpdate(x, y, x - 1, y);
			}
			
			if (world[x][y].rain > 0)
			{
				strokeWeight(1);
				stroke(crain);
				if (gy - height - world[x][y].rain * 12 - 12 > 0)
				{
					line(gx + 10, gy - height - world[x][y].rain * 12 - 12, gx + 10, gy - height - world[x][y].rain * 12);
				}
				if (world[x][y].rain == 1)
				{
					world[x][y].water += 2;
				}
				world[x][y].rain--;
			}
			else
			{
				if (random(1, 5) > 4)
				{
					//world[x][y].rain = 40;
				}
			}
			
			if (world[x][y].mud > 0)
			{
				world[x][y].mud--;
			}
		}
	}
}

function blockUpdate(x, y, nx, ny) {
	nx = max(0, min(worldwidth - 1, nx));
	ny = max(0, min(worldheight - 1, ny));
	
	if (world[x][y].water > 0)
	{
		if (world[nx][ny].water + world[nx][ny].z < world[x][y].water + world[x][y].z)
		{
			world[nx][ny].water++;
			world[x][y].water--;
		}
	}
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}