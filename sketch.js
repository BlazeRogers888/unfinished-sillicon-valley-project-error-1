var trashy,trashyImg
var backgroundImg
var plasticBottle,plasticBottleImg
var plasticBin,plasticBinImg
var foodWasteBin,foodWasteBinImg
var compostBin,compostBinImg
var keyCode,keyDown



function preload() {
  trashyImg = loadImage("trashy.png")
  backgroundImg = loadImage("grassBackground.png")
  plasticBottleImg = loadImage("plasticBottle.png")
  plasticBinImg = loadImage("plasticBin.png")
  foodWasteBinImg = loadImage("foodWasteBin.png")
  compostBinImg = loadImage("compostBin.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  trashy = createSprite(windowWidth/16,windowHeight-100,50,50)
  trashy.addImage(trashyImg)
  trashy.scale = 0.01
}

function draw() {
  background(backgroundImg);
  drawSprites()
  //trash
  spawnTrash()
  plasticBinSpawn()
  foodWasteBinSpawn()
  compostBinSpawn()
  //movements
  movement()
  }

  


function spawnTrash() {
  
  if(frameCount%80 == 0){
    plasticBottle = createSprite(random(windowWidth/128,windowWidth),windowHeight/128,50,50);
    plasticBottle.addImage(plasticBottleImg);
    plasticBottle.velocityY = 10
    plasticBottle.scale = 0.8

    plasticBottle.life = 1000
  }
    
}

function plasticBinSpawn() {
  
  if(keyCode == 80){
    plasticBin = createSprite(trashy.x,trashy.y-30,50,50)
    plasticBin.addImage(plasticBinImg)
    plasticBin.scale = 0.3
    plasticBin.visible = true
  }
  else{
    plasticBin.destroy()
  }
  }

function foodWasteBinSpawn() {
  if(keyCode == 70){
    foodWasteBin = createSprite(trashy.x,trashy.y-30,50,50)
  foodWasteBin.addImage(foodWasteBinImg)
  foodWasteBin.scale = 0.3
  foodWasteBin.visible = true
  }
  else{
    foodWasteBin.destroy()
  }
  }


function compostBinSpawn() {
  if(keyCode == 67){
    compostBin = createSprite(trashy.x,trashy.y-30,50,50)
  compostBin.addImage(compostBinImg)
  compostBin.scale = 0.3
  compostBin.visible = true
  }
  else{
    compostBin.destroy()
  }
}

function movement() {
  if(keyDown("LEFT_ARROW")){
    trashy.x = trashy.x-30
  }
  if(keyDown("RIGHT_ARROW")){
    trashy.x = trashy.x+30
  }
}

function createBins() {
  
  

  
}