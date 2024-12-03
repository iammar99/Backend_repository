# Chapter # 1

## Introduction to Node, NPM, Package.JSON


Table of Content 
- [Chapter # 1](#chapter--1)
  - [Introduction to Node, NPM, Package.JSON](#introduction-to-node-npm-packagejson)
  - [What is NPM](#what-is-npm)
  - [What is Package](#what-is-package)
  - [What is Node.js](#what-is-nodejs)
  - [Why Node.js](#why-nodejs)
  - [What Node.js can do](#what-nodejs-can-do)
  - [How to install Node.js](#how-to-install-nodejs)
  - [Introduction To Module](#introduction-to-module)
    - [CommonJS Modules.](#commonjs-modules)
    - [ES Modules.](#es-modules)
    - [Usage of .mjs and .js Extention](#usage-of-mjs-and-js-extention)
  - [Running a node.js file](#running-a-nodejs-file)
  - [Practical Work](#practical-work)
  - [References](#references)


## What is NPM

NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js

## What is Package

A package in Node.js contains all the files you need for a module.

Modules are JavaScript libraries you can include in your project.


## What is Node.js

Node.js is an open source enviornment . It is not a programming language . It allow you to run javascript on server side

## Why Node.js

There are many reason of choosing node.js 
1. It is free
2. It uses Javascript
3. It is fast
4. It elimnate waiting as per PHP
5. It is also very memory effeicient


## What Node.js can do 

It is used for server side functionality

1. It can perform CRUD operation on file on server side 
2. It can perform CRUD operation on database on server side
3. It can collect form data


## How to install Node.js

You can install node from their official website [nodejs.org](https://nodejs.org/en) Always install LTS version

You can verify It's Installation by running this Command in termainal 

```
node -v
```
OR
```
npm -v
```

## Introduction To Module

Module is a block of independent code which can be used in different files in different files Which proomote code reusability

You can understand easily from here 

[Short Video](https://www.youtube.com/watch?v=qgRUr-YUk1Q)


This table summarizes the core modules available in Node.js, their purpose, and their current status.

| **Module**       | **Description**                                          | **Status** |
| ---------------- | -------------------------------------------------------- | ---------- |
| `assert`         | Provides a set of assertion tests                        | Active     |
| `buffer`         | Handles binary data                                      | Active     |
| `child_process`  | Runs a child process                                     | Active     |
| `cluster`        | Splits a single Node process into multiple processes     | Active     |
| `crypto`         | Handles OpenSSL cryptographic functions                  | Active     |
| `dgram`          | Provides implementation of UDP datagram sockets          | Active     |
| `dns`            | Performs DNS lookups and name resolution functions       | Active     |
| `domain`         | Handles unhandled errors (Deprecated)                    | Deprecated |
| `events`         | Handles events                                           | Active     |
| `fs`             | Handles the file system                                  | Active     |
| `http`           | Makes Node.js act as an HTTP server                      | Active     |
| `https`          | Makes Node.js act as an HTTPS server                     | Active     |
| `net`            | Creates servers and clients                              | Active     |
| `os`             | Provides information about the operating system          | Active     |
| `path`           | Handles file paths                                       | Active     |
| `punycode`       | A character encoding scheme (Deprecated)                 | Deprecated |
| `querystring`    | Handles URL query strings                                | Active     |
| `readline`       | Handles readable streams one line at a time              | Active     |
| `stream`         | Handles streaming data                                   | Active     |
| `string_decoder` | Decodes buffer objects into strings                      | Active     |
| `timers`         | Executes a function after a given number of milliseconds | Active     |
| `tls`            | Implements TLS and SSL protocols                         | Active     |
| `tty`            | Provides classes used by a text terminal                 | Active     |
| `url`            | Parses URL strings                                       | Active     |
| `util`           | Provides access to utility functions                     | Active     |
| `v8`             | Provides information about V8 (the JavaScript engine)    | Active     |
| `vm`             | Compiles JavaScript code in a virtual machine            | Active     |
| `zlib`           | Compresses or decompresses files                         | Active     |



There is 2 common types of Module System 

1. CommonJS Modules.
2. ES Modules.

Here is a difference between them 

### CommonJS Modules.

It is default one by node.js It uses **require** keyword to import module and uses **module.export** word to export 

Here is the Example 

**Exporting File**

```
function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = greet;   
```

**Importing  File**

```
const greet = require('./utils');
console.log(greet('Ammar')); // Output: Hello, Ammar!
```

### ES Modules.

Introduced in ES6 as the standard for JavaScript. It uses **import** keyword to import module and uses **export** word to export 

Here is the Example 

**Exporting File**

```
// utils.mjs
export function greet(name) {
  return `Hello, ${name}!`;
}
```

**Importing  File**

```
// app.mjs
import { greet } from './utils.mjs';
console.log(greet('Ammar')); // Output: Hello, Ammar!
```


### Usage of .mjs and .js Extention 

If you are using both modules you should define module in **package.json** file like this 

```
{
  "type": "module"
}
```

then you can use .js extention otherwise use .mjs extention


## Running a node.js file 

use this command to run the file 
```
node {filename.js}
```


## Practical Work 

Here you can view all practical work --> [Practice](./Practical.md)

## References

The data in this chapter is collected from places for example [w3school.com](https://www.w3schools.com/) and [chatGPT](https://chatgpt.com/) and guidance is also taken from this [repo](https://github.com/arhamansari11/Backend-Developement/tree/master)