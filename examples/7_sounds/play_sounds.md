To play music in **p5.js when an event happens**, you only need two things:

1. **Include the p5.sound library**
2. **Load a sound file and trigger it inside an event function** (like `mousePressed()`, `keyPressed()`, or a custom event)

The key detail: **Browsers block autoplay**, so audio must start _inside a user gesture_ (click, key press, etc.).  
This is exactly what p5’s examples show. [archive.p5js.org](https://archive.p5js.org/examples/sound-load-and-play-sound.html)

---

## ✅ Quick Example: Play Music on Click

```javascript
let song;

function preload() {
  song = loadSound("assets/music.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  if (!song.isPlaying()) {
    song.play();
  }
}
```

---

## 🎧 Play Music on ANY Event (Keyboard, Mouse, Custom)

### **Keyboard event**

```javascript
function keyPressed() {
  if (key === " ") {
    // spacebar
    song.play();
  }
}
```

### **Mouse drag**

```javascript
function mouseDragged() {
  song.play();
}
```

### **Custom event**

You can trigger sound from any function as long as it’s called from a user action:

```javascript
function triggerSound() {
  song.play();
}

function mousePressed() {
  triggerSound();
}
```

---

## 📦 Make Sure p5.sound Is Included

If you're using the online editor, it's already included.

If you're using your own HTML file, add:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/addons/p5.sound.min.js"></script>
```

---

## 🔊 More Controls (pause, stop, loop)

p5.SoundFile supports: `play()`, `stop()`, `pause()`, `loop()`, `isPlaying()`  
 [p5.js](https://p5js.org/reference/p5.sound/p5.SoundFile/)

Example toggle:

```javascript
function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
```

---

## Want me to show you how to:

- Play different sounds for different keys?
- Trigger sound only inside certain regions?
- Add volume, rate, or effects?

Just tell me what kind of event you want your game or sketch to react to!
