/*
  Exemple d'agent bête inspiré de Generative Gestaltung, ISBN: 978-3-87439-759-9
    
  Sketch pour Processing 2.0.3
  Écrit par Louis Eveillard
  Cours de design génératif
  HETIC — octobre 2013
  Questions, retours, contact :
  — louiseveillard@gmail.com
*/

Agent agent1 = new Agent(200, 200, 10, color(200,150,50)); 
Agent agent2 = new Agent(400, 400, 10, color(50,150,200)); 
Agent agent3 = new Agent(200, 200, 5, color(255,255,255)); 

boolean enfant = false;

int diametre = 4;
int vitesseMarche = 10;
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
}

void draw() {
  
  fill(0,4);
  noStroke();
  rect( 0,0, width, height);
  
  for (int i=0; i<mouseX/3; i++) {
    agent1.drawAgent();
    agent2.drawAgent();
    
    if (agent1.posX == agent2.posY && agent1.posY == agent2.posY) {
      agent3.posX = agent1.posX;
      agent3.posY = agent1.posY;
      enfant = true;
    }
    
    if (enfant == true) {
      agent3.drawAgent();
    }
  }
}

void keyReleased() {
  background(0);  
  
}


class Agent {
  
 int posX, posY, diametre;
 color couleurAgent;
 
  Agent (int x, int y, int d, color c) {  
    posX = x; 
    posY = y; 
    diametre = d;
    couleurAgent = c;
  } 
  
  void drawAgent() {

    update();
    
    fill(couleurAgent,150);
    noStroke();
    
    ellipse( posX, posY, diametre, diametre );    

  }
  
  
  void update() { 

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

    if (posX<0) posX = width;
    if (posX>width) posX = 0;
    if (posY<0) posY = height;
    if (posY>height) posY = 0;
 
  }
 
  
}   

