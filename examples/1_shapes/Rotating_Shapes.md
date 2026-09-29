# Rotating Shapes in p5.js

Rotating shapes in p5.js involves using the `rotate()` function along with `push()` and `pop()` to control the rotation of individual shapes without affecting the entire canvas.

[Rotating Cubes](https://p5js.org/reference/p5/rotateX/)

Here’s a basic example:

```js
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for rotation
}

function draw() {
  background(220);

  push(); // Start a new drawing state
  translate(width / 2, height / 2); // Move the origin to the center
  rotate(frameCount); // Rotate by the number of frames
  rectMode(CENTER);
  rect(0, 0, 100, 50);
  pop(); // Restore original state
}
```
