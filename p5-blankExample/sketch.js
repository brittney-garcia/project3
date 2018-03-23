function setup() {
  createCanvas(500, 500);
  x = width / 2;
 y = height;

  background(252, 239, 121);
}

function draw() {

  stroke(0, 202, 0);
  fill(0, 202, 0)
  ellipse(mouseX, mouseY, 50, 50);

  	fill(65, 202, 244);
  	strokeWeight(0);
  rect(0, 0, 500, 90);

stroke(65, 202, 244);
fill(65, 202, 244);
ellipse(x, y, 24, 24);

x = x + random(-1, 1);
y = y - 1;

if (y < 0) {
  y = height;
}

textSize(40);
    text("A RIVER RUNS THROUGH", width/43 - 10, 400);
}
