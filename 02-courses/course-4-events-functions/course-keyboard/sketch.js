// var xPos, yPos, xDir, yDir;

// function setup(){
//   createCanvas(500,500);
//   background(255);
//   fill(0);
//   noStroke();
  
//   xPos = width/2;
//   yPos = height/2;
// }

// function draw(){
//   xDir = int(random(-10,10));
//   yDir = int(random(-10,10));
//   xPos = xPos + xDir;
//   yPos = yPos + yDir;
//  	fill(random(255), random(255), random(255));
//   ellipse(xPos, yPos, 3,3);
// }

function setup(){
 createCanvas(500,500);
 // strokeWeight(3);
}

function draw(){
	// if(mouseIsPressed){
	// 	// background(255,0,0);
	// 	ellipse(mouseX, mouseY, 40,40);
	// }
	// line(pmouseX, pmouseY, 	, mouseY);
	// if(mouseY < height/2){
	// 	background(0);
	// }
	// else{
	// 	background(255);
	// }
	// background(255);
	// ellipse(mouseX, mouseY, 40, 40);
}

function mouseDragged(){
	stroke(random(255),0,0);
	strokeWeight(10);
	line(pmouseX, pmouseY, mouseX, mouseY);
}

// function mousePressed(){
// 	background(255,0,0);
// }

// function mouseReleased(){
// 	background(0,255,0);
// }


