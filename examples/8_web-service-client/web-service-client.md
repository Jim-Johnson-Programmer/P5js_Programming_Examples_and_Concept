You can get **working p5.js code for calling JSON and XML web services** directly from the official p5.js documentation. The two primary sources are:

- **p5.js Wiki: “Loading external files: AJAX, XML, JSON”** [Github](https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)
- **p5.js IO Reference (loadJSON, loadXML, httpGet, httpPost, httpDo)** [GeeksForGeeks](https://www.geeksforgeeks.org/javascript/p5-js-io-complete-reference/)
- **p5.js loadJSON reference** (examples using remote JSON feeds) [p5.js](https://p5js.org/reference/p5/loadJSON/)

Below is a clean, ready-to-use set of examples for **JSON** and **XML** web service clients in p5.js, based directly on those sources.

---

## 🟦 **1. JSON Web Service Client (p5.js built-in)**

p5.js provides **loadJSON()** and **httpGet()** for JSON APIs.

### **A) Using `loadJSON()` (recommended)**

```js
let data;

async function setup() {
  createCanvas(400, 400);

  // Load JSON from a web service
  data = await loadJSON("https://api.example.com/data");

  console.log(data); // inspect the JSON
}
```

This matches the official usage pattern shown in the p5.js reference. [p5.js](https://p5js.org/reference/p5/loadJSON/)

### **B) Using `httpGet()` for more control**

```js
function setup() {
  createCanvas(400, 400);

  httpGet(
    "https://api.example.com/data",
    "json",
    (response) => {
      console.log("JSON:", response);
    },
    (error) => {
      console.error("Error:", error);
    },
  );
}
```

`httpGet()` is part of the p5.js IO API. [GeeksForGeeks](https://www.geeksforgeeks.org/javascript/p5-js-io-complete-reference/)

---

## 🟪 **2. XML Web Service Client (p5.js built-in)**

p5.js includes **loadXML()** for XML APIs.

### **Using `loadXML()`**

```js
let xml;

async function setup() {
  createCanvas(400, 400);

  xml = await loadXML("https://api.example.com/data.xml");

  console.log(xml); // p5.XML object
}
```

This is directly supported in the p5.js IO reference. [GeeksForGeeks](https://www.geeksforgeeks.org/javascript/p5-js-io-complete-reference/)

### **Accessing XML nodes**

```js
function draw() {
  if (!xml) return;

  let items = xml.getChildren("item");
  for (let item of items) {
    let name = item.getChild("name").getContent();
    console.log(name);
  }
}
```

---

## 🟧 **3. Using AJAX (XMLHttpRequest) with p5.js**

The p5.js Wiki shows how to use raw AJAX for JSON or XML. [Github](https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)

```js
function setup() {
  createCanvas(400, 400);

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.example.com/data.xml");
  xhr.onload = () => {
    let xml = xhr.responseXML;
    console.log(xml);
  };
  xhr.send();
}
```

---

## 🟩 **4. Summary of p5.js Web Service Functions**

From the p5.js IO reference:

- **loadJSON()** → JSON loading
- **loadXML()** → XML loading
- **httpGet()** → GET request
- **httpPost()** → POST request
- **httpDo()** → any HTTP verb (PUT, DELETE, etc.)  
  [GeeksForGeeks](https://www.geeksforgeeks.org/javascript/p5-js-io-complete-reference/)

---

## Want a full working template?

I can generate:

- A **JSON client template** with error handling, async/await, and rendering
- An **XML client template** with parsing and display
- A **combined API module** you can drop into any p5.js sketch

Just tell me whether you want **JSON only**, **XML only**, or **both in one module**.
