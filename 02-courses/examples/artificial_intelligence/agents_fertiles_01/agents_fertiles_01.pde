/*
  Exemple de trois agents créés grâce à des classes et qui se déplacent
  
  Le chiffre représente leur génération (1ere, seconde, etc.). 
  Les agents se déplacent de manière aléatoire.
  Deux agents sur la même case à un moment t interagissent suivant ces règles :
  
    - deux agents de la meme génération produisent un enfant sain.
    - deux agents de générations différentes produisent un agent incestueux
    - un agent incestueux tue tout agent qui se trouve sur sa case
    - deux agents incestueux s'entretuent 
 
 Sketch pour Processing 2.0.3
 Écrit par Louis Eveillard
 */

Agent[] agents;
int count = 30;
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

PFont maTypo;

void setup() {
  size(800, 800);
  noStroke();
  background(0);

  agents = new Agent[count];

  agents[0] = new Agent(200, 200, 10, color(200, 150, 50), 1, false);
  agents[1] = new Agent(400, 400, 10, color(50, 150, 200), 1, false); 

  for (int i = 2; i < count; i++) {
    agents[i] = new Agent();
  }

  String[] fontList = PFont.list();
  println(fontList);

  maTypo = createFont("InputMono-Regular", 10);
  textFont(maTypo);
}

void draw() {

  fill(0, 255);
  noStroke();
  rect( 0, 0, width, height);

  for (int i=0; i < mouseX/30; i++) {
    for (int j = 0; j < vivant; j++) {

      if( agents[j].isAlive == true ) {
        agents[j].drawAgent();

        for (int jj = j+1; jj < vivant; jj++) {
          
          if( agents[jj].isAlive == true ) {
  
            // si même case
            if ( agents[j].posX == agents[jj].posX && agents[j].posY == agents[jj].posY ) {   
                        
              // si un des deux est destructeur
              if ( agents[j].destructeur == true && agents[jj].destructeur == false ) {
                agents[jj].isAlive = false;
              } 
              else if ( agents[j].destructeur == false && agents[jj].destructeur == true ) {
                agents[j].isAlive = false;
              } 
              else if ( agents[j].destructeur == true && agents[jj].destructeur == true ) {
                agents[jj] = new Agent();
                agents[j] = new Agent();
              } 
              
              // si meme generation = agent sain
              else if (agents[j].generation == agents[jj].generation) { 
                agents[vivant] = new Agent(int(random(width)), int(random(height)), 10-vivant, color(random(255), 150, 200), agents[j].generation+1, false); 
                vivant++;
              }
              
              // si pas meme generation = agent incestueux
              else if (agents[j].generation != agents[jj].generation) {  
                agents[vivant] = new Agent(int(random(width)), int(random(height)), 10-vivant, color(random(255), 150, 200), agents[j].generation+1, true); 
                vivant++;
              }
            }
          }
        }
      }
    }
  }
}

void keyReleased() {
  background(0);
}


class Agent {

  int posX, posY, pposX, pposY, diametre;
  color couleurAgent;
  boolean destructeur;
  int generation;
  boolean isAlive;

  Agent() {
  }


  Agent (int x, int y, int d, color c, int gen, boolean des) {  
    posX = x; 
    posY = y; 
    diametre = d;
    couleurAgent = c;
    generation = gen;
    destructeur = des;
    isAlive = true;
  } 

  void drawAgent() {

    update();
    
    fill(255);
    text( generation, posX, posY );
    

    fill(couleurAgent, 150);
    noStroke();
    
    if( destructeur ) {
      fill( 255, 0, 0); 
    }

    text( generation, posX, posY);
 
  }
  


  void update() { 

    pposX = posX;
    pposY = posY;

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

    if (posX<0) {
      posX = width;
      pposX = posX;
    }
    if (posX>width) {
      posX = 0;
      pposX = posX;
    }
    if (posY<0) {
      posY = height;
      pposY = posY;
    }
    if (posY>height) {
      posY = 0;
      pposY = posY;
    }
  }
}   

