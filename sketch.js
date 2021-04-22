var dog, happydog;
var database;
var foodS, foodStock;

function preload(){
dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);




  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;

  

  
}


function draw() {  
   background(46, 39, 87);




   text("Food Remaining:" + foodS, 200,30);



  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

if (x<=0){
  x=0;
}else{
  x=x-1;
}



  database.ref('/').update({
    Food:x
  })
}



