var shiva
var snow
var skateboard






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  shiva=new shiva(50,200,10,10)
  skateboard=new skateboard(10,120,40,40)
}

function draw() {
  backgroudimg(backgroudimg)
  background(255,255,255);  
  drawSprites();
  shiva.display();
  skateboard.display();
  if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
  
}


this.image=loadImage("SnowFalling-C33-Template-main/snow1.jpg")