//Create variables here
var dog, happyDog, db, foodS, dog1;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog1 = createSprite(250, 250, 10, 10);
  dog1.addImage(dog);
  db = firebase.database();
  dog1.scale = 0.15;
  db.ref("food").on("value", readStock);
}


function draw() {  
    background(46, 139, 87);

    if(keyWentDown(UP_ARROW)) {
      writeStock(foodS);
      dog.addImage(happyDog);
    }

  drawSprites();
  //add styles here

}

//functions to read values from DB
  function readStock(data) {
    foodS = data.val();
  }

//function to write values in DB
  function writeStock(x) {
    if(x<=0) {
      x = 0;
    }else{
      x = x-1;
    }
    db.ref('/').update({
      food:x
    })
  }



