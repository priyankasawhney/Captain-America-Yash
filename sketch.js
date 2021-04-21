var CaptainAmerica,CAimg;
var AIM,ArnimZola,BaronZemo,BatrocTheLeaper,Crossbones,Hydra,RedSkull;
var VillainsGroup;
var bg,bgimg;
var Logo,logoimg;
var restart,reatartimg;
var start,startimg;
var GameOver,GOimg;
var gameState=PLAY;
var PLAY = 1;
var END = 0;

function preload(){
    AIM=loadImage("Aim.png");
    ArnimZola=loadImage("Arnimzola.png");
    CAimg=loadImage("Captainamerica2.png");
    BaronZemo=loadImage("Baronzemo.png");
    BatrocTheLeaper=loadImage("Batroctheleaper.png");
    Crossbones=loadImage("Crossbones.png");
    Hydra=loadImage("Hydra.png");
    RedSkull=loadImage("Redskull.png");
    bgimg=loadImage("bgcap.jpg");
    logoimg=loadImage("Logo.png");
    startimg=loadImage("Start.png");
    GOimg=loadImage("gameover.png");
    Restartimg=loadImage("restart.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(0,100,windowWidth,windowHeight);
bg.addImage(bgimg);
bg.x=bg.width/2;
//bg.velocityX = -9;
bg.scale=0.8;


CaptainAmerica=createSprite(100,740,30,90);
CaptainAmerica.addImage(CAimg);
CaptainAmerica.scale=0.8;
CaptainAmerica.setCollider("circle",0,0,200); 
CaptainAmerica.debug=false;

ground=createSprite(width/2,750,windowWidth,10);
ground.x=ground.width/2;
ground.velocityX=-6;
ground.visible=false;

logo= createSprite(600,250,100,50);
logo.addImage(logoimg);
logo.scale=0.8;

gameover= createSprite(600,250,20,20);
gameover.addImage(GOimg);
gameover.scale=0.8;
gameover.visible=false ;

restart = createSprite(600,450,20,20);
restart.addImage(Restartimg);
restart.scale=0.8;
restart.visible=false;

start= createSprite(600,460,40,40);
start.addImage(startimg);
start.scale=0.8;

score=0;

VillainsGroup=new Group();

}


function draw(){
    if(mousePressedOver(start) ){
        gameState=PLAY;
        start.visible=false;
        logo.visible=false;
        CaptainAmerica.velocityY=-16;

    }
    if(gameState===PLAY){
       bg.velocityX=-20;
    score=score+Math.round(getFrameRate()/60);
    
    if(bg.x<0){
      bg.x=bg.width/2;
       }
    
    if(touches.length>0||keyDown("space")&& CaptainAmerica.y>=400){
        CaptainAmerica.velocityY= -25;
            touches=[];
      }
      CaptainAmerica.velocityY=CaptainAmerica.velocityY+2.1;
    
    if(CaptainAmerica.isTouching(VillainsGroup)){
        gameState=END;
    }
    
    }
    
    else if(gameState===END){
    gameover.visible=true;
    restart.visible=true;
    CaptainAmerica.velocityX=0;
    CaptainAmerica.velocityY=0;
    bg.velocityX=0;
    ground.velocityX=0;
    VillainsGroup.setVelocityXEach();
    VillainsGroup.setVelocityYEach();
    VillainsGroup.destroyEach();
    CaptainAmerica.x=100;
    CaptainAmerica.y=640;
    
    }
    
    if(touches.length>0||mousePressedOver(restart)){
        reset();
        touches=[];
    }
    CaptainAmerica.collide(ground);
    
    drawSprites();
    textSize(20);
    textStyle(BOLD);
    fill("black");
    text("SCORE: "+score,windowWidth-220,60);  
    }
    
    function reset(){
    gameState=PLAY;
    gameover.visible=false;
    restart.visible=false;
    VillainsGroup.destroyEach();
    score=0;
    CaptainAmerica.x=100;
    CaptainAmerica.y=640;
    
    }
    
    
    