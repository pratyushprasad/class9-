var box,box1,box2 ;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "blue"
  box1 = createSprite (100,100,15,15)
  box1.shapeColor = "pink"     
  box2 = createSprite (50,50,30,30)
  box.shapeColor = "yellow"  
  edges = createEdgeSprites () ; 
  box2.velocityX = -4 ;    
  box2.velocityY = -2 ; 

}

function draw() 
{
   background("red");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box1.position.x = box1.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box1.position.x= box1.position.x -5;  
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box1.position.y = box1.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box1.position.y = box1.position.y + 5;    
  }
  box2.bounce(box1)
  box2.bounceOff (edges)   

  drawSprites();
}     






