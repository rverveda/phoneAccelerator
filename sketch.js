let maxX = 0;
let maxY = 0;
let maxZ = 0;
let maxAccels = [maxX, maxY, maxZ];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(50);
  checkdata();
  if(maxY > 0) {
    background(0,256,0);
  }
}

function checkdata() {
  let accelX = accelerationX;
  let accelY = accelerationY;
  let accelZ = accelerationZ;
  
  if (accelX > maxX) {
    maxY = 1;
    return maxY;
  }
}
