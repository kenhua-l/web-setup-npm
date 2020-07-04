#! /usr/bin/env node
// create file structure
const fs = require('fs');
var files = [
  'src/css/main.scss',
  'src/js/main.js',
  'src/partials/head.html',
  'src/partials/header.html',
  'src/partials/footer.html',
  'src/partials/scripts.html',
  'src/index.html',
  'dest/css/main.css',
  'dest/js/main.js',
  'dest/index.html'
];

// create files
for(file of files) {
  var folder = file.substring(0, file.lastIndexOf('/') + 1);
  console.log(folder);
  if(!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  let fd;
  try {
    fd = fs.openSync(file, 'a');
    fs.appendFileSync(fd, '', 'utf8');
  } catch (err) {
    console.log('bad,', file)
  } finally {
    if (fd !== undefined)
      fs.closeSync(fd);
  }
}

// copy files from node_modules to dest
var dependencies = [
  ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'dest/css/bootstrap.min.css'],
  ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'dest/js/bootstrap.min.js'],
  ['node_modules/jquery/dist/jquery.min.js', 'dest/js/jquery.min.js']
]
for(dependency of dependencies) {
  try {
    fs.copyFileSync(dependency[0], dependency[1]);
  } catch (err) {
    console.log('errorrrrr');
  }
}

// initiate gulp
const { exec } = require('child_process');
exec('gulp', function(err, stdout, stderr) {
  if(err) {
    console.log('exec error', err);
  } else {
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  }
});


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