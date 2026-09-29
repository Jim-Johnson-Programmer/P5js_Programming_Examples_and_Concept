If you want **key presses other than the arrow keys** in p5.js, you use the same keyboard APIs—`key`, `keyCode`, `keyIsDown()`, and the `keyPressed()` event—but with different values. The trick is knowing **where the official list of keys is** and how p5 exposes them.

Here’s the full breakdown so you can confidently handle _any_ key.

---

# 🎯 **Where to find the official p5.js key reference**

p5.js documents keyboard input in two places:

### **1. p5.js Reference → Keyboard**

Go to:  
**p5js.org → Reference → Input → Keyboard**

This section covers:

- `key`
- `keyCode`
- `keyIsDown()`
- `keyPressed()`
- `keyReleased()`

### **2. p5.js Key Constants**

Inside the reference, you’ll find constants like:

- `ENTER`
- `RETURN`
- `TAB`
- `SHIFT`
- `CONTROL`
- `ALT`
- `BACKSPACE`
- `DELETE`
- `ESCAPE`
- `UP_ARROW`, `DOWN_ARROW`, etc.

These are the official names you use in your code.

---

# 🎹 **How to detect letter keys (A–Z)**

Letters and numbers use the `key` variable:

```js
function keyPressed() {
  if (key === "a" || key === "A") {
    console.log("A was pressed");
  }
}
```

`key` gives you the actual character.

---

# 🔢 **How to detect number keys (0–9)**

Same idea:

```js
function keyPressed() {
  if (key === "1") {
    console.log("Number 1 pressed");
  }
}
```

---

# 🔐 **How to detect special keys (Enter, Shift, Space, etc.)**

Special keys use `keyCode`:

```js
function keyPressed() {
  if (keyCode === ENTER) {
    console.log("Enter pressed");
  }
  if (keyCode === SHIFT) {
    console.log("Shift pressed");
  }
  if (keyCode === 32) {
    // Spacebar
    console.log("Space pressed");
  }
}
```

Spacebar is ASCII 32.

---

# 🎮 **How to detect keys continuously (hold down)**

Use `keyIsDown()`:

```js
function draw() {
  if (keyIsDown(65)) {
    // 'A' key
    console.log("Holding A");
  }
}
```

You can use:

- ASCII codes
- p5 constants (`SHIFT`, `ENTER`, etc.)
- Arrow constants (`LEFT_ARROW`, etc.)

---

# 🧠 **Where do key codes come from?**

p5.js uses standard **JavaScript key codes** for special keys and ASCII codes for letters/numbers.

You can find the full list here:

- MDN KeyboardEvent reference
- p5.js Keyboard reference
- Any ASCII table (for letters/numbers)

---

# 🧪 **Quick example: Move a square with WASD**

```js
let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (keyIsDown(87)) y -= 3; // W
  if (keyIsDown(83)) y += 3; // S
  if (keyIsDown(65)) x -= 3; // A
  if (keyIsDown(68)) x += 3; // D

  rect(x, y, 40, 40);
}
```

---

# If you want, I can give you:

- A full list of **all p5.js key constants**
- A cheat sheet for **ASCII key codes**
- A ready‑to‑use **keyboard controller module** for your p5.js games

Just tell me what you want to build.
