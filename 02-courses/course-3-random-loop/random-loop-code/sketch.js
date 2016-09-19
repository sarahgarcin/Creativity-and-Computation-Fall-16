// Examples on loops and randomness
// Uncomment code to see it working

// Define a variable for storing the random value
// var n; 

function setup(){
	// Create a canvas
	createCanvas(500,500);

	//---------------------------------------
	// introduction to random function
	// -------------------------------
	// n = int(random(10, 20)); // Store integer random value between 10 and 20 in "n"
	// console.log(n); // Display the "n" value in javascript console of browser
	//---------------------------------------

	//---------------------------------------
	// Draw lines with randomness
	//--------------------------- 
	// strokeWeight(10);
	// stroke(random(255), random(255), random(255)); // use random to assign a random color to strokes
	// line(0, random(500), 500, random(500)); // draw a line with random y coordinates
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));
	// stroke(random(255), random(255), random(255));
	// line(0, random(500), 500, random(500));

	//---------------------------------------
	// introduction to while loop
	//---------------------------
	// draw 200 lines with random y
	// var a = 0; // Define the start point
	// while(a<200){ // While a is smaller than 200 execute the code in brackets
	// 	line(0, random(500), 500, random(500)); // draw a line at random y point
	// 	a++; // increase the a value, when a is equal to 200, the loop is stoping
	// }

	//---------------------------------------
	// while loop + randomness
	//---------------------------
	// strokeWeight(10);
	// while(random(500)< 495){
	// 	point(random(500), random(500));
	// }

	//---------------------------------------
	// introduction to for loop
	//---------------------------
	// for(var a=0; a<200; a+=10){ // create a loop that start to 0 (a = 0), run until a = 200 and each step =+10
	// 	line(a, random(500), a, random(500));
	// }

	//---------------------------------------
	// for loop + randomness
	//---------------------------
	// for (var i = 0; i < height; i++) {
	//   var r = random(255);
	//   stroke(r);
	//   line(0, i, r*2, i);
	// }

}

function draw(){
	// background(255);
	// You can try to cut and paster one of the code below in the draw function
	// The draw function is a loop running x times in each second. 
	// You can manage the FrameRate by wrinting frameRate(30); in the setup function
	// For more info about the draw function: https://p5js.org/reference/#/p5/draw

}