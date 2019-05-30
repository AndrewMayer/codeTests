// Complete the sherlockAndAnagrams function below.

function hashCode(str) {
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function onlyDupes(array) {
  const alreadyIn = [];
  dupes = [];
  array.forEach(function(string) {
    if (alreadyIn[string]) {
      dupes.push(string);
    } else alreadyIn[string] = true;
  });
  return dupes;
}

function sherlockAndAnagrams(s) {
  const testGrams = [];

  //convert string to array

  const strArray = s.split('');
  let alreadySeen = [];
  let count = 0;
  let dupes = onlyDupes(strArray);
  totalDupes = 0;

  // Make hash of all possible combos
  strArray.forEach(function(str, i) {
    let j = i;
    curWord = '';
    while (j < strArray.length) {
      curWord = curWord += strArray[j];
      hashWord = hashCode(curWord);
      console.log(curWord);
      testGrams.push(hashWord);
      j++;
    }
  });

  let listDupes = new Set(onlyDupes(testGrams));
  console.log('listDupes ');
  console.log(listDupes);
  listDupes.forEach(val => {
    const anaGrams = testGrams.filter(testGram => testGram === val);
    console.log('anaGrams');
    console.log(anaGrams);
    count += anaGrams.length;
  });

  console.log('testgrams ');
  console.log(testGrams);
  console.log('count ' + count);

  return count;

  // if no duplicate characters then return nothing and exit.

  //Create hash table of every possible outcome for duplicate letters in both directions.

  //Create string of unique values and see how many of each value(-1 to remove self).
}
