If you want **mouse control of an item in p5.js**—clicking, dragging, restricting movement to certain regions, or ignoring clicks outside an area—the p5.js reference gives you everything you need, but it’s scattered across several pages. I’ll pull it together cleanly so you can learn fast and see exactly where to find each part.

---

## 🖱️ **Where to find mouse‑control info in p5.js**

All official documentation is under:

### **p5js.org → Reference → Input → Mouse**

This section covers:

- `mouseX`, `mouseY`
- `mousePressed()`
- `mouseReleased()`
- `mouseDragged()`
- `mouseClicked()`
- `mouseIsPressed`
- `mouseButton`
- `pmouseX`, `pmouseY`

This is the _canonical_ place to learn mouse interaction.

---

# 🧭 **1. Detecting Clicks**

### **Reference:** `mousePressed()`

This fires once when the mouse is pressed.

```js
function mousePressed() {
  console.log("Mouse clicked at", mouseX, mouseY);
}
```

### **Check if click is inside a region**

```js
function mousePressed() {
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    console.log("Clicked inside the box");
  }
}
```

---

# 🖐️ **2. Dragging an Item**

### **Reference:** `mouseDragged()`

```js
let x = 200;
let y = 200;

function draw() {
  background(220);
  circle(x, y, 40);
}

function mouseDragged() {
  x = mouseX;
  y = mouseY;
}
```

This makes the circle follow the mouse while dragging.

---

# 🎯 **3. Drag Only When Clicking Inside the Item**

This is the classic “click‑to‑grab” pattern.

```js
let x = 200;
let y = 200;
let dragging = false;

function draw() {
  background(220);
  circle(x, y, 40);

  if (dragging) {
    x = mouseX;
    y = mouseY;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < 20) dragging = true;
}

function mouseReleased() {
  dragging = false;
}
```

---

# 🚫 **4. Ignore Clicks Outside a Region**

Example: only allow dragging inside a rectangle.

```js
function mousePressed() {
  if (mouseX < 50 || mouseX > 350 || mouseY < 50 || mouseY > 350) {
    return; // ignore clicks
  }

  // otherwise handle click
}
```

---

# 📦 **5. Restrict Movement to a Region**

Example: keep the item inside a box.

```js
function draw() {
  background(220);

  x = constrain(x, 100, 300);
  y = constrain(y, 100, 300);

  circle(x, y, 40);
}
```

### **Reference:** `constrain()`

---

# 🧠 **6. Mouse Buttons**

### **Reference:** `mouseButton`

```js
function mousePressed() {
  if (mouseButton === LEFT) console.log("Left click");
  if (mouseButton === RIGHT) console.log("Right click");
  if (mouseButton === CENTER) console.log("Middle click");
}
```

---

# 📍 **7. Previous Mouse Position**

### **Reference:** `pmouseX`, `pmouseY`

Useful for calculating drag direction or velocity.

```js
function mouseDragged() {
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;
  console.log(dx, dy);
}
```

---

# 🗂️ **Summary: Where to Learn Everything**

### **Official p5.js Reference Pages**

- **Mouse Input:** `https://p5js.org/reference/#group-Input%20%5Bmouse%5D` [(p5js.org in Bing)](https://www.bing.com/search?q="https%3A%2F%2Fp5js.org%2Freference%2F%23group-Input%2520%255Bmouse%255D")
- **Events:** `mousePressed()`, `mouseReleased()`, `mouseDragged()`, `mouseClicked()`
- **Position:** `mouseX`, `mouseY`, `pmouseX`, `pmouseY`
- **Buttons:** `mouseButton`, `LEFT`, `RIGHT`, `CENTER`
- **Constraints:** `constrain()`

### **Best Tutorials**

- Coding Train: “Mouse Interaction in p5.js”
- OpenProcessing: search “p5.js drag” or “p5.js mouse control”

---

If you want, I can build you a **complete reusable mouse‑controller module** for your p5.js games (dragging, clicking, region filtering, snapping, boundaries).
