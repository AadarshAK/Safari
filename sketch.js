var backI, backS;
var x1=0,x2;
var scrollSpeed=2,offSetX=0;
var hunter, hunterS, appleI,appleS;
var bananaS,bananaI
var orangeI,orangeS
var watermelonI,watermelonS
var Fruits;




function preload(){
   backI=loadImage("img/forest1_edited.jpg");
   hunter=loadImage("img/hunter.png");
   appleI=loadImage("img/apple.png");
   bananaI = loadImage("img/banana.png")
   orangeI = loadImage("img/orange.png");
   watermelonI = loadImage("img/watermelon.png")

   
}

function setup(){
   createCanvas(windowWidth,windowHeight);

   hunterS=createSprite(250,height-360.5,20,20);
   hunterS.addImage(hunter);
   hunter.scale=0.1234

}

function draw(){
   background("white");

   image(backI,offSetX,0,width,height);
   image(backI,offSetX+width,0,width,height);

   offSetX--;

   if(offSetX <= -width){
      offSetX=0;
   }
   
   spawnFruits();
   drawSprites();
}

function spawnFruits(){
   if(frameCount%300===0){
      Fruits=createSprite(width+20,Math.round(random(200,300)),20,20);
      Fruits.velocityX=-2;
      Fruits.scale=0.5;

      var fruitRand=Math.round(random(1,4));

      switch(fruitRand){
         case 1 : Fruits.addImage(appleI);
         break;
         
         case 2 : Fruits.addImage(orangeI);
         break;

         case 3 : Fruits.addImage(bananaI);
         break;

         case 4 : Fruits.addImage(watermelonI);
      }
   }
}