function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  background(210);
}

function keyReleased(){
  console.log(key);
  if(key == 'A' || key == 'B' || key == 'C'){
    noStroke();
    fill(random(255));
    rect(random(width), random(height), 30, 50);
  }
  if(key == 'D' || key == 'E' || key == 'F'){
    noStroke();
    fill(random(255));
    ellipse(random(width), random(height), 30, 30);
  }

}

function mouseDragged(){
  stroke(random(255), random(255),random(255));
  strokeWeight(10);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function draw(){

}