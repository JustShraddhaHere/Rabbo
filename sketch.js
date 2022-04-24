var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  SpawnApple()
  SpawnOLeaf()
  SpawnRLeaf() 
  drawSprites();
   
  
// var select_sprites = Math(random(1,3));
function SpawnApple(){
  if (frameCount% 60 === 0){
    apple= createSprite(610, 20, 20, 30);
    apple.addImage(appleImg);
    apple.velocityY= 4
    apple.scale= 0.07
    apple.x= random(0,400)

    apple.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1

  }
}

function SpawnOLeaf(){
  if (frameCount% 60 === 0){
    orangeL= createSprite(610, 20, 20, 30);
    orangeL.addImage(orangeImg);
    orangeL.velocityY= 4
    orangeL.scale= 0.07
    orangeL.x= random(0,400)

    orangeL.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1

  }
}
function SpawnRLeaf(){
  if (frameCount% 60 === 0){
    redL= createSprite(610, 20, 20, 30);
    redL.addImage(redImg);
    redL.velocityY= 4
    redL.scale= 0.07
    redL.x= random(0,400)

    redL.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1

  }
}

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
