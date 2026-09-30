# VSCode Debugging Setup

1. Open your project in VSCode.
2. In root folder of your project, create a `.vscode` folder if it doesn't already exist.
3. Inside the `.vscode` folder, create a file named `launch.json`.
4. Add the following configuration to `launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug p5 Sketch via Live Server (Edge)",
      "type": "msedge",
      "request": "launch",
      "url": "http://127.0.0.1:5500/index.html",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Debug p5 Sketch via Live Server (Chrome)",
      "type": "chrome",
      "request": "launch",
      "url": "http://127.0.0.1:5500/index.html",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

5. Install live server extension in VSCode if you haven't already. Click on the Extensions view icon on the Sidebar, search for "Live Server" by Ritwick Dey, and click "Install".
6. Start the live server by right-clicking on your `index.html` file and selecting "Open with Live Server".
7. Use the debug configurations you added in `launch.json` to debug your p5 sketch in either Edge or Chrome.
8. Set breakpoints in your JavaScript code by clicking in the gutter next to the line numbers. When you start debugging using the configurations in `launch.json`, VSCode will pause execution at these breakpoints, allowing you to inspect variables and step through your code.
9. Look the local variables window and watch window in the debug panel to monitor the values of your variables as you step through the code.
10. Use the call stack window in the debug panel to see the sequence of function calls that led to the current point of execution. This can help you understand the flow of your program and identify where issues may be occurring.
11. Stop the debugging session by clicking the red square (stop) button in the debug toolbar when you are done inspecting your code.
