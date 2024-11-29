## First Task

1. Create your first server
2. Create a package.json file using this command and answer simple question 

```
npm init -y
```


3. Try running this code 

```
import http from 'http';

// Create a server object:
http.createServer((req, res) => {
  res.write('Hello World!'); // Write a response to the client
  res.end(); // End the response
}).listen(8080); // The server object listens on port 8080
```
4. Run this command 

```
node {filename.js}
```

5. Type this in URL bar

```
localhost:8080
```


Congratulation on creating your first server 🎉

## Second Task

If you want realtime changes in server when you chaneg rather than always running the code follow these steps

1. Install this package 
```
npm install nodemon
```

2. Change your script section in package.json file to this

```
    "scripts": {
        "start": "nodemon app.js",
        "test": "npm test"
    },
```

3. Run this command 
```
npm start
```

Now You can view realtime changes by just refreshing the browser


## Third Task

1. create a module and try exporting it and import it in app.js

Check code from app.js


## Fourth Task


## CRUD on file 

Import promise from fs and use these keyword to perform action

# Create

`fs.writeFile()`

You can view Code in this file  --> [creatFile.js](./createFile.js)

# read

`fs.readFile()`

You can view Code in this file  --> [readFile.js](./read.js)

# update

`fs.appendFile()`

You can view Code in this file  --> [updateFile.js](./update.js)

# Delete

`fs.unlink()`

You can view Code in this file  --> [DeleteFile.js](./deleteFile.js)

# Rename

`fs.rename()`

You can view Code in this file  --> [renameFile.js](./renameFile.js)


For Furthur Syntax look files


## Fifth Task

Create a module in which try to get url address and it's parts

Here is the code --> [getURl.js](./getURL.js)


## Sixth Task

Create a File server in which you will combine the two files, and serve the file requested by the client. Create two html files and save them in the same folder as your node.js files.

Like those I have created in my folder you may have a look 

Now the logic is this that we will get pathname from the URL and look for that file in our server and render data from that file. Kindly Have a look in [app.js](./app.js) to betterly understand this .  