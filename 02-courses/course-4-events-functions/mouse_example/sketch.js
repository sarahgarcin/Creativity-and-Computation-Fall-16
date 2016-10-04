function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  background(210);
}


function draw(){
  ellipse(mouseX, mouseY, mouseX /10, mouseY/10);
}

// function setup(){
//   createCanvas(window.innerWidth,window.innerHeight);
//   background(255);
//   noCursor();
// }

// function draw(){

// }

// function mouseDragged(){
//   stroke(random(255), random(255),255);
//   strokeWeight(10);
//   line(width/2, height/2, mouseX, mouseY);
// }

// var pressed = false;

// function setup(){
//   createCanvas(window.innerWidth,window.innerHeight);
//   background(255);
// }

// function draw(){
//   if(pressed == true){
//     ellipse(mouseX, mouseY, 20,20);
//   }
// }

// function mousePressed(){
//   background(0);
//   pressed = true;
// }

// function mouseReleased(){
//   background(255);
//   pressed = false;
// }



