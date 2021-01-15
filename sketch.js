var music,ball,box1,box2,box3,box4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
  
    ball=createSprite(400,300,20,20);
    ball.x=Math.round(random(20,750));
    ball.shapeColor=("white");
    ball.velocityY=4;
    ball.velocityX=Math.round(random(-4,4));

    box1=createSprite(100,580,160,15);
    box1.shapeColor=("orange");

    box2=createSprite(300,580,160,15);
    box2.shapeColor=("cyan");

    box3=createSprite(500,580,160,15);
    box3.shapeColor=("purple");

    box4=createSprite(700,580,160,15);
    box4.shapeColor=("lime");

}

function draw() {
  background("black");
 
 if(ball.isTouching(box1)){
     ball.shapeColor=box1.shapeColor;
     music.play();
     ball.velocityX=0;
     ball.velocityY=0;
 }

 if(ball.isTouching(box2)){
    ball.shapeColor=box2.shapeColor;
    music.play();
    ball.velocityX=0;
    ball.velocityY=0;
 }

 if(ball.isTouching(box3)){
    ball.shapeColor=box3.shapeColor;
    music.play();
    ball.velocityX=0;
    ball.velocityY=0;
 }

 if(ball.isTouching(box4)){
    ball.shapeColor=box4.shapeColor;
    music.play();
    ball.velocityX=0;
    ball.velocityY=0;
 }
 edges=createEdgeSprites();
 ball.bounceOff(edges);
 //ball.bounceOff(box1);
 //ball.bounceOff(box2);
 //ball.bounceOff(box3);
 //ball.bounceOff(box4);

 drawSprites();
    
}
