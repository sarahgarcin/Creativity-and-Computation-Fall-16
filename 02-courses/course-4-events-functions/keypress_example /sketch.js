function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

}

function draw(){

}

function keyReleased(){
  if(key=='R'){
     background(255,0,0);
  }  
  if(key=='V'){
     background(0,255,0);
  }  
  if(key=='B'){
     background(0,0,255);
  }  
}

// -----------------------------


// var x = window.innerWidth/2;
// var y = window.innerHeight/2;
// var w = 100;
// var h = 200;
// var step = 10;

// function setup(){
//   createCanvas(window.innerWidth, window.innerHeight);
//   background(255);
//   fill(0);
//   rect(x, y, w, h);
// }

// function draw(){
// 	if (keyIsPressed === true){
// 		background(255);
// 	  if(keyCode==38){
// 	    y-=step;
// 	    rect(x,y,w,h); 
// 	  }
// 	  if(keyCode==40){
// 	    y+=step;
// 	    rect(x,y,w,h);
// 	  }
// 	  if(keyCode==39){
// 	    x+=step;
// 	    rect(x,y,h,w);
// 	  }
// 	  if(keyCode==37){
// 	    x-=step;
// 	    rect(x,y,h,w);
// 	  }
// 	}
// }
