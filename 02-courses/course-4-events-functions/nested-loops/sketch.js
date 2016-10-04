function setup(){
	// loop throught each pixels of the canvas and give it a random color
		// createCanvas(500,500);
		// background(255);
		// for(var column=0; column <width; column++){
		//   for(var row=0; row <height; row++){
		//      stroke(random(255), random(255), random(255));
		//      strokeWeight(3);
		//      point(column, row); 
		//   }
		// }

	// create a pattern of ellipse
		createCanvas(500,300);
		background(255);
		for(var x=0; x <width/20; x++){
		  for(var y=0; y <height/20; y++){
		    noStroke();
		    fill(random(255),0,0);
		     ellipse(10 + x * 20, 10 + y * 20, random(5,10),random(5,10)); 
		  }
		}
}

function draw(){

}