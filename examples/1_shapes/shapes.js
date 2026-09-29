function setup() {
  createCanvas(400, 400);
}

function draw() {
  /**
   * Background must come first or the shapes will not show.
   */
  background(220);

  /**
   * Draws a square at position (50, 50) with a side length of 100.
   * https://p5js.org/reference/p5/square/
   */
  arc(50, 50, 80, 80, 0, PI + HALF_PI);

  /**
   * Draws a square at position (50, 50) with a side length of 100.
   * https://p5js.org/reference/p5/square/
   */
  square(50, 50, 100);
}
