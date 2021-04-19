var cat,mouse,scenery;
var mouseImg1,catImg1,catImg2,mouseImg2,sceneryImg,mouseImg3,catImg3;


function preload() {
    //load the images here
catImg1=loadAnimation("images/cat1.png");
mouseImg1=loadAnimation("images/mouse1.png");
sceneryImg=loadImage("images/garden.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3=loadAnimation("images/mouse4.png");
catImg3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200,200,20,20);
cat.addAnimation(catImg1);
cat.scale=0.03;


mouse=createSprite(180,230,10,10);
mouse.addAnimation(mouseImg1);
mouse.scale=0.03;


scenery=createSprite(100,280,30,30);
scenery.addImage(sceneryImg);

}

function draw() {

  
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
mouse.addAnimation(mouseImg3);
mouse.changeAnimation(mouseImg2);

cat.addAnimation(catImg3);
cat.changeAnimation(catImg2);

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
    }
    if(keyCode===RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
        }
}
