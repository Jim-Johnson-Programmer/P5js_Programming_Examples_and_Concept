function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(70, 130, 180);
  arc(200, 200, 180, 180, 0, PI + QUARTER_PI, PIE);
}