let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

/**
 * rerun 60x per second
 */
function draw() {
  background(220);

  /**
   * change x and y based on arrow key input
   * using the keyPressed() function instead of keyIsDown()
   */
  // if (keyIsDown(LEFT_ARROW)) {
  //   x -= 3;
  // }
  // if (keyIsDown(RIGHT_ARROW)) {
  //   x += 3;
  // }
  // if (keyIsDown(UP_ARROW)) {
  //   y -= 3;
  // }
  // if (keyIsDown(DOWN_ARROW)) {
  //   y += 3;
  // }

  /**
   * Draw the circle at the updated position
   */
  circle(x, y, 30);
}

/** event handler for key presses */
function keyPressed() {
  if (keyCode === LEFT_ARROW) x -= 10;
  if (keyCode === RIGHT_ARROW) x += 10;
  if (keyCode === UP_ARROW) y -= 10;
  if (keyCode === DOWN_ARROW) y += 10;
}
