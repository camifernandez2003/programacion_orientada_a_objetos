let posX, posY;
let velX, velY;
let diam;
let rad;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rad = ceil(random(5, 50));
  diam = rad * 2;

  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  velX = random(-10, 10);
  velY = random(-10, 10);

  bg = color(random(100, 255), random(50), random(0, 100));
}

function draw() {
  background(bg);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  // & y || o

  if (posX > width - rad || posX < rad) {
    velX *= -1;
    bg = color(random(100, 255), random(50), random(0, 100));
  }
  if (posY > height - rad || posY < rad) {
    velY *= -1;
    bg = color(random(100, 255), random(50), random(0, 100));
  }

  circle(posX, posY, diam);
}
