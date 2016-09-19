/*
  Exemple de trois agents créés grâce à des classes et qui se déplacent sur la surface
    
  Sketch pour Processing 2.0.3
  Écrit par Louis Eveillard
*/

Agent[] agents;
int count = 10;
int vivant = 2;

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
  
  agents = new Agent[count];
  
  agents[0] = new Agent(200, 200, 10, color(200,150,50), 1, false);
  agents[1] = new Agent(400, 400, 10, color(50,150,200), 1, false); 

  for (int i = 2; i < count; i++) {
    agents[i] = new Agent();
  }

}

void draw() {
  
  fill(0,4);
  noStroke();
  rect( 0,0, width, height);
  
  for (int i=0; i<mouseX/30; i++) {
    for (int j = 0; j < vivant; j++) {
      
      agents[j].drawAgent();

      for (int jj = j+1; jj < vivant; jj++) {
        if ( agents[j].posX == agents[jj].posX && agents[j].posY == agents[jj].posY ) {   
            if (agents[j].destructeur == true || agents[jj].destructeur == true ) {
              agents[jj] = new Agent ();
              agents[j] = new Agent ();
            }
              
            if (agents[j].generation == agents[jj].generation)       
              agents[vivant] = new Agent(int(random(width)), int(random(height)), 10-vivant, color(random(255),150,200), agents[j].generation+1, false); 
            if (agents[j].generation != agents[jj].generation)       
              agents[vivant] = new Agent(int(random(width)), int(random(height)), 10-vivant, color(random(255),150,200), agents[j].generation+1, true); 

           if (vivant < count-1)
             vivant++;
        }
      } 
    }
  }
}

void keyReleased() {
  background(0);  
  
}


class Agent {
  
  int posX, posY, diametre;
  color couleurAgent;
  boolean destructeur;
  int generation;
 
  Agent() {
    
    
    
  }
 
 
  Agent (int x, int y, int d, color c, int gen, boolean des) {  
    posX = x; 
    posY = y; 
    diametre = d;
    couleurAgent = c;
    generation = gen;
    destructeur = des;
    
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
