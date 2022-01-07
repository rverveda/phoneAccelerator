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
  if (accels[0] > maxX) {
    maxX = accelerationX;
  } else if (accels[1] > maxY) {
    maxY = accelerationY;
  } else if (accels[2] > maxZ) {
    maxZ = accelerationZ;
  }
  textSize(50);
  text(accels, 100, 50);
  text(maxAccels, 100, 200);
  // console.log(maxX, maxY, maxZ);
}
