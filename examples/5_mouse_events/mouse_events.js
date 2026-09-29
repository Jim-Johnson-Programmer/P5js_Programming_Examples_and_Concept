function setup() {
  createCanvas(400, 400);
  background(220);
}

let x = 200;
let y = 200;
let dragging = false;

/** called continuously to draw the canvas */
function draw() {
  background(220);
  circle(x, y, 40);

  if (dragging) {
    x = mouseX;
    y = mouseY;
  }
}

/** event handler for mouse press */
function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < 20) dragging = true;
}

/** event handler for mouse release */
function mouseReleased() {
  dragging = false;
}
