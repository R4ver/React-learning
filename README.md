# React Learning

## Compiling Source Files

You'll need to first install the react tools from npm (I assume it's already installed alongside Node).

### File structure example:
``` 
root/
|-- index.html
|-- src/ //Script source folder
|   |-- app.js
```

1. Open a node command prompt or terminal (I use Git Bash on Windows)
2. Type in ```npm install -g react-tools```
3. Still in command prompt or terminal, navigate to your project root folder
4. Type in ```jsx --watch /src /build```
5. This will keep watching you src folder and compile files when changed and put them into a new folder called "build"

## Usage
```jsx
//Include /build/hello.js in footer or bottom of page before the script bellow
React.render(
    <Hello random="true" name="Mark Z." />, //random="true" prints out "Hello" in multiple languages
    document.getElementById("hello")
);
```