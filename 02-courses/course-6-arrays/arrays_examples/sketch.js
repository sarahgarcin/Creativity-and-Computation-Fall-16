
// // -------- Simple Array example --------------
// // create the array
// var widthRect = [300, 230, 320, 142, 178, 245];

// function setup(){
//   createCanvas(500,300);
//   background(255);
//   fill(0);
//   // Read one array element each time through the for loop
//   for(var i = 0; i < widthRect.length; i++) {
//   	// draw the rectangles depending on the array values
//     rect(width/4, i*50, widthRect[i], 45);
//   }
// }

// ------------------------------------------------------------------

// ----------- Store Data in Array from Mouse Position ---------------
// var num = 50;
// var x = [];
// var y = [];

// function setup() { 
//   createCanvas(500, 500);
//   noStroke();
//   fill(255, 102);
// }

// function draw() {
//   background(0);
//   // Shift the values to the right
//   for (var i = num-1; i > 0; i--) {
//     x[i] = x[i-1];
//     y[i] = y[i-1];
//   }
//   // Add the new values to the beginning of the array
//   // The last item will have the last position of our mouse
//   x[0] = mouseX;
//   y[0] = mouseY;
//   // Draw the circles
//   for (var i = 0; i < num; i++) {
//     ellipse(x[i], y[i], i/2.0, i/2.0);
//   }
// }


// ------------------------------------------------------------------


// ------------- Two dimensionnal Array Example ---------------------
var colors = [
		  ['yellow', 'red', 'green', 'blue', 'yellow', 'red'],
      ['green',  'blue', 'red', 'yellow', 'red'],
      ['red',   'yellow', 'blue', 'green', 'blue'],
      ['blue', 'green', 'yellow', 'red', 'purple'], 
      ['yellow', 'red', 'green', 'blue', 'yellow'], 
      ['red',   'yellow', 'blue', 'green', 'blue'],
      ['blue', 'green', 'yellow', 'red', 'purple'],
      ['yellow', 'red', 'green', 'blue', 'yellow', 'red'],
      ];



function setup(){
	createCanvas(400,400);
	noStroke();

	for(var row=0; row<colors.length; row++){
		for(var col=0; col<colors[row].length; col++){
			fill(colors[row][col]);
			rect(col*(width/colors.length), row*(height/colors.length),(width/colors.length), (height/colors.length)  )
		}
	}

}






