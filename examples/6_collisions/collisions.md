Collision detection in **p5.js** depends on what kind of shapes or sprites you’re using. You can do it manually with math (rectangles, circles, polygons), or you can use the **p5.play** library, which gives you built‑in sprite collision functions.

I’ll break it down cleanly so you can use whichever method fits your sketch.

---

# ⭐ 1. **Collision Between Circles**

Use distance between centers.

```js
function circlesCollide(x1, y1, r1, x2, y2, r2) {
  return dist(x1, y1, x2, y2) < r1 + r2;
}
```

This is perfect for:

- balls
- bubbles
- circular characters

---

# ⭐ 2. **Collision Between Rectangles (AABB)**

Axis‑aligned bounding box collision.

```js
function rectsCollide(a, b) {
  return (
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
  );
}
```

Use this for:

- tiles
- platforms
- UI elements
- top‑down movement

---

# ⭐ 3. **Collision Between Circle and Rectangle**

Useful for characters hitting walls.

```js
function circleRectCollide(cx, cy, r, rx, ry, rw, rh) {
  let testX = cx;
  let testY = cy;

  if (cx < rx) testX = rx;
  else if (cx > rx + rw) testX = rx + rw;

  if (cy < ry) testY = ry;
  else if (cy > ry + rh) testY = ry + rh;

  return dist(cx, cy, testX, testY) <= r;
}
```

---

# ⭐ 4. **Pixel‑Perfect or Polygon Collisions**

For irregular shapes, use `collide2d.js` (a helper library often used with p5).

It supports:

- polygon collisions
- line collisions
- point‑in‑shape
- circle‑polygon
- rectangle‑polygon

Search: **“p5.collide2d library”**

---

# ⭐ 5. **Sprite Collisions (p5.play library)**

If you’re using sprites, p5.play gives you built‑in collision detection:

### Basic collision:

```js
if (sprite1.overlap(sprite2)) {
  // they touched
}
```

### Prevent overlapping (solid objects):

```js
sprite1.collide(sprite2);
```

### Bounce:

```js
sprite1.bounce(sprite2);
```

### Group collisions:

```js
group.overlap(player, callback);
```

This is the easiest way to build games with:

- characters
- enemies
- bullets
- platforms

---

# ⭐ 6. **Where to find official references**

### p5.js Reference (core math + shapes)

- Shapes: p5js.org → Reference → Shape
- Math: p5js.org → Reference → Math → dist(), constrain(), map()

### p5.play Reference (sprites + collisions)

- p5play.org → Reference → Sprite → overlap(), collide(), bounce()

### collide2d.js Reference (advanced collisions)

- GitHub: “p5.collide2d”
- Functions: collideRectRect, collideCircleCircle, collideLineCircle, etc.

---

# ⭐ 7. **Which method should YOU use?**

Since you’re building p5.js games and movement demos:

- **Simple shapes → use math collisions**
- **Game sprites → use p5.play**
- **Irregular shapes → use collide2d.js**

If you tell me what kind of objects you want to collide (circles, rectangles, sprites, polygons), I’ll build you a **ready‑to‑use collision module** tailored to your sketch.
