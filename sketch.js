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
  text(maxX,100,100)
}

function checkdata() {
  let accelX = accelerationX;
  let accelY = accelerationY;
  let accelZ = accelerationZ;
  
  if (accelX > maxX) {
    maxX = accelX;
    return maxX;
  }
}
