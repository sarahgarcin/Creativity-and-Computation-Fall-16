/*
  Exemple d'agent un peu plus intelligent inspiré de Generative Gestaltung, ISBN: 978-3-87439-759-9
    
  Sketch pour Processing 2.0.3
  Écrit par Louis Eveillard
*/

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
  noStroke();
  background(0);
  println(vitesseMarche);
}

void draw() {
  
  fill(0,4);
  noStroke();
  rect( 0,0, width, height);

  for (int i=0; i<mouseX/30; i++) {

    int pposX = posX;
    int pposY = posY;
    fill(255,250);
    noStroke();
    diametre = 4;
    vitesseMarche = 10;
    
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

    if (posX<0) posX = width;
    if (posX>width) posX = 0;
    if (posY<0) posY = height;
    if (posY>height) posY = 0;

    //println( brightness(get(posX, posY)) );
    if ( brightness(get(posX, posY)) > 50) {
      posX = pposX;
      posY = pposY;
      fill(26, 219, 255, 50);
      diametre = 10;
    }
    
    
    ellipse( posX, posY, diametre, diametre );
    
    if (posX != width && posX != 0 && posY != 0 && posY != height) 
      stroke(255,150);
      
    line( posX, posY, pposX, pposY);
  }
}

void keyReleased() {
  background(0);  
  
}

