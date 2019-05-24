'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function hashValue(word) {
  let hash = 0;
  for (var i = 0; i < word.length; i++) {
    hash += word.charCodeAt(i);
  }
  return hash;
}

function makeHash(array) {
  let tempObject = {};
  array.forEach(word => {
    let hashVal = hashValue(word);
    if (tempObject[hashVal] === undefined) {
      tempObject[hashVal] = 1;
    } else {
      tempObject[hashVal] += 1;
    }
  });
  return tempObject;
}
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let magHash = makeHash(magazine);
  let noteHash = makeHash(note);
  let noteGood = true;

  for (let index = 0; index < note.length; index++) {
    let currentVal = hashValue(note[index]);
    if (!magHash.hasOwnProperty(currentVal)) {
      noteGood = false;
      break;
    } else if (noteHash[currentVal] > magHash[currentVal]) {
      noteGood = false;
      break;
    }
  }

  if (noteGood) {
    process.stdout.write('Yes');
  } else {
    process.stdout.write('No');
  }
}

function main() {
  const mn = readLine().split(' ');

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const magazine = readLine().split(' ');

  const note = readLine().split(' ');

  checkMagazine(magazine, note);
}
