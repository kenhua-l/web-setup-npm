#! /usr/bin/env node
const fs = require('fs');
console.log("console.log output123");
var destpath = "dest/";
var srcpath = "src/";
if (!fs.existsSync(destpath)){
  fs.mkdirSync(destpath, { recursive: true });
}
if (!fs.existsSync(srcpath)){
  fs.mkdirSync(srcpath, { recursive: true });
}

exports.printMsg = function() {
  console.log("this is a demo");
}

class Color {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const allColors = [
  new Color('brightred', '#e74C3c'),
]

exports.getRandomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors;