// Complete the sherlockAndAnagrams function below.
// function hashValue(word) {
//   let hash = 0;
//   for (var i = 0; i < word.length; i++) {
//     hash += word.charCodeAt(i);
//   }
//   return hash;
// }

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

  // Make hash of all possible combos from duplicates
  strArray.forEach(function(str, i) {
    if (dupes.includes(str)) {
      let j = i;
      totalDupes++;
      console.log(j);
      let curWord = '';
      while (j >= 0) {
        curWord = curWord += strArray[j];
        console.log(curWord);
        testGrams.push(hashCode(curWord));
        j--;
      }
      j = i;
      curWord = '';
      while (j < strArray.length) {
        curWord = curWord += strArray[j];
        console.log(curWord);
        testGrams.push(hashCode(curWord));
        j++;
      }
    } else alreadySeen[str] = true;
  });

  let newSeen = [];
  testGrams.forEach(val => {
    if (newSeen[val]) {
      console.log(val);
      count++;
    } else newSeen[val] = true;
  });

  console.log('testgrams ');
  console.log(testGrams);
  console.log('count ' + count);

  return count - dupes.length;

  // if no duplicate characters then return nothing and exit.

  //Create hash table of every possible outcome for duplicate letters in both directions.

  //Create string of unique values and see how many of each value(-1 to remove self).
}
