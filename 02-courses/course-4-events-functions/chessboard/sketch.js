function setup(){
  createCanvas(640,640);
  background(255);
  fill(0);
  
  for(var x=0; x<width; x+=width/4){
    for(var y=0; y<height; y+=height/4){
      rect(x, y, width/8, height/8);
    }
  }
  for(var x=width/8; x<width; x+=width/4){
    for(var y=height/8; y<height; y+=height/4){
      rect(x, y, width/8, height/8);
    }
  }

  
}

function draw(){

}