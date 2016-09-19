import ddf.minim.*;

Minim minim;
AudioInput in;

int diametre = 4;
int vitesseMarche = 10;
int posX = 200, posY = 200;
int direction = 0;

// directions possibles
int NORD = 0;
int NORDEST = 1;
int EST = 2;
int SUDEST = 3;
int SUD = 4;
int SUDOUEST = 5;
int OUEST = 6;
int NORDOUEST = 7;



void setup() {
  size(800, 800);
  
  minim = new Minim(this);
  minim.debugOn();
  in = minim.getLineIn(Minim.STEREO, 16);
  
  noStroke();
  background(0);
}

void draw() {

  int volume = round(in.mix.level()*30);
  
  fill(0,4);
  noStroke();
  rect( 0,0, width, height);

  for (int i=0; i< volume; i++) {

    int pposX = posX;
    int pposY = posY;
    
    direction = (int) random(0, 8);

    if (direction == NORD) {
      posY -= vitesseMarche;
    }
    if (direction == NORDEST) {
      posX += vitesseMarche;
      posY -= vitesseMarche;
    }
    if (direction == EST) {
      posX += vitesseMarche;
    }
    if (direction == SUDEST) {
      posX += vitesseMarche;
      posY += vitesseMarche;
    }
    if (direction == SUD) {
      posY += vitesseMarche;
    }
    if (direction == SUDOUEST) {
      posX -= vitesseMarche;
      posY += vitesseMarche;
    }
    if (direction == OUEST) {
      posX -= vitesseMarche;
    }
    if (direction == NORDOUEST) {
      posX -= vitesseMarche;
      posY -= vitesseMarche;
    }
 
    fill(255,150);
    noStroke();

    if (posX<0) posX = width;
    if (posX>width) posX = 0;
    if (posY<0) posY = height;
    if (posY>height) posY = 0;

    ellipse( posX, posY, diametre, diametre );
    
  }
}

void keyReleased() {
  background(0);  
}

void stop() {
 // always close Minim audio classes when you are done with them
 in.close();
 minim.stop();
 super.stop();
}
