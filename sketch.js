let maxX = 0;
let maxY = 0;
let maxZ = 0;
let maxAccels = [maxX, maxY, maxZ];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  accels = [accelerationX, accelerationY, accelerationZ];
  if (accelerationX > maxX) {
    maxAccels[0] = accelerationX;
  }else if (accelerationY > maxY) {
    maxAccels[1] = accelerationY;
  }else if (accelerationZ > maxZ) {
    maxAccels[2] = accelerationZ;
  }
  textSize(50);
  text(accels, 100, 50)
  text(maxAccels, 100, 200)
}