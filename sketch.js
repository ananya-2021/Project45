var canvas;
var wall1,wall2;
var boy, boyImg, boyImg2;
var guard, guardImg;

var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40;
var block41,block42,block43,block44,block45,block46,block47,block48,block49,block50;
var block51,block52,block53,block54,block55,block56,block57,block58,block59,block60;
var block61,block62,block63,block54,block65;

var goldenBeam, goldenBeanImg;

var gameState = 0;

var start,startImg;

function preload(){
  
  wall1 = loadImage("wall1.png");
  wall2 = loadImage("wall2.png");

  boyImg = loadImage("boy.jpg");
  boyImg2 = loadImage("boy2.jpg");

  guardImg = loadImage("guard.jpg");

  goldenBeanImg = loadImage("goldenBeam.jpg");

  startImg = loadImage("start.png");
  
}

function setup(){
 
  canvas = createCanvas(900,500);

    block1 = new Block2(100,60,50,20);
    block2 = new Block2(100,90,50,20);
    block3 = new Block2(100,240,50,20);
    block4 = new Block2(100,300,50,20);
    block5 = new Block2(100,360,50,20);
    block6 = new Block2(100,420,50,20);
   
    block7 = new Block2(200,250,50,20);
  
    block8 = new Block2(300,250,50,20);
  
    block9 = new Block2(400,180,50,20);
    block10 = new Block2(400,410,50,20);
    block11 = new Block2(400,130,50,20);
  
    block12 = new Block2(500,250,50,20);
    block13 = new Block2(500,310,50,20);
    block14 = new Block2(500,350,50,20);
  
    block15 = new Block2(600,190,50,20);
    block16 = new Block2(600,250,50,20);
    block17 = new Block2(600,130,50,20);
  
    block18 = new Block2(700,70,50,20);
    block19 = new Block2(700,130,50,20);
    block20 = new Block2(700,300,50,20);
    block21 = new Block2(700,350,50,20);
    
    block22 = new Block2(800,60,50,20);
    block23 = new Block2(800,120,50,20);
    block24 = new Block2(800,180,50,20);
    block25 = new Block2(800,240,50,20);
    block26 = new Block2(800,300,50,20);
    block27 = new Block2(800,360,50,20);
    block28 = new Block2(800,420,50,20);
    
    block29 = new Block(130,30,50,20);
    block30 = new Block(190,30,50,20);
    block31 = new Block(250,30,50,20);
    block32 = new Block(310,30,50,20);
    block33 = new Block(370,30,50,20);
    block34 = new Block(430,30,50,20);
    block35 = new Block(490,30,50,20);
    block36 = new Block(550,30,50,20);
    block37 = new Block(610,30,50,20);
    block38 = new Block(670,30,50,20);
    block39 = new Block(730,30,50,20);
    block40 = new Block(770,30,50,20);
  
    block41 = new Block(570,100,50,20);
    block42 = new Block(510,100,50,20);
    block43 = new Block(450,100,50,20);
    block44 = new Block(390,100,50,20);
    block45 = new Block(330,100,50,20);
  
    block46 = new Block(270,220,50,20);
    block47 = new Block(230,220,50,20);
  
    block48 = new Block(460,280,50,20);
    block49 = new Block(430,280,50,20);
    
    block50 = new Block(240,380,50,20);
    block51 = new Block(300,380,50,20);
    block52 = new Block(360,380,50,20);
    block53 = new Block(540,380,50,20);
    block54 = new Block(600,380,50,20);
    block55 = new Block(660,380,50,20);
  
    block56 = new Block(130,450,50,20);
    block57 = new Block(190,450,50,20);
    block58 = new Block(250,450,50,20);
    block59 = new Block(310,450,50,20);
    block60 = new Block(370,450,50,20);
    block61 = new Block(430,450,50,20);
    block62 = new Block(490,450,50,20);
    block63 = new Block(550,450,50,20);
    block64 = new Block(610,450,50,20);
    block65 = new Block(670,450,50,20);
  
  guard = createSprite(180,90,20,20);
  guard.addImage(guardImg);
  guard.scale = 0.2;

  boy = createSprite(20,165,20,20);
  boy.addImage(boyImg2);
  boy.scale = 0.05;

  goldenBeam = createSprite(750,450,20,20);
  goldenBeam.addImage(goldenBeanImg);
  goldenBeam.scale = 0.11;

  boy.setCollider("rectangle",0,0,boy.width,boy.height);
  guard.setCollider("rectangle",0,0,guard.width,guard.height);

  start = createSprite(450,250,20,20);
  start.addImage(startImg);

}

function draw(){
  
  background("black");

  console.log(mouseX,mouseY);

  if(gameState === 0){
     
     boy.visible = false;
     guard.visible = false;

     if(keyDown("enter")){
       gameState = 1;
     }
  }

  if(gameState === 1){
    
    boy.visible = true;
    guard.visible = true;
    goldenBeam.visible = true;
    start.visible = false;

    guardPosition();

    if(keyDown("right_arrow")){
     boy.x = boy.x + 2;
     boy.addImage(boyImg2);
    }
  
    if(keyDown("left_arrow")){
      boy.x = boy.x - 2;
      boy.addImage(boyImg);
     }
  
    if(keyDown("up_arrow")){
      boy.y = boy.y - 2;
     }
  
    if(keyDown("down_arrow")){
      boy.y = boy.y + 2;
     }
  
     if(guard.isTouching(boy)){
       console.log("GAME OVER")
       gameState = 2;
     }
  }

  if(gameState === 2){

     boy.visible = true;
     guard.visible = true;
     goldenBeam.visible = true;

     if(boy.isTouching(guard)){
       gameState = 3;
     }
  }

  if(gameState === 3){
    textSize(15);
    fill("white");
    text("You were caught",435,160);
    text("Press 'Space' to Try Again",410,180);
  }

  drawSprites();
}

function guardPosition(){
  if(frameCount%100 === 0){
  var rand = Math.round(random(1,5));
  switch(rand){

    case 1 : guard.x = 150;
             guard.y = 340;
             break;
   
   case 2 : guard.x = 350;
            guard.y = 160;
            break; 
  
   case 3 : guard.x = 450;
            guard.y = 400;
            break;  
            
   case 4 : guard.x = 650;
            guard.y = 120;
            break;
            
  case 5 : guard.x = 750;
           guard.y = 320;
           break;

             
  }
 }
}