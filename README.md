# vscode-debug

## Usage
- Open this project in Visual Studio Code
- Go to the debug panel, on the left sidebar
- In the file index.js, at the left of the line numbers, you can add a break point with a click
- Add a break point at the line 5
- At the top of the debug sidebar, click on the green arrow
- Open a browser window to: localhost:3000/add-to-ten/4
- In the top middle toolbar use the downward arrow to go to the next step
- Hover the variables in your code and see that number is a string
- Fix it

## Debug the debugger :)
If you see: `Error: listen EADDRINUSE `
Run:
```
ps aux | grep node
kill <PID>
```