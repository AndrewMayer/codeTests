//find smallest positive value

//loop up from value.
//if value is missing return
//if value is next highest, take that as value and then continue to loop upwards

mainArray = mainArray.filter(function(x) {
  return x > -1;
});

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  console.log(A);
  Array.min = function(A) {
    return Math.min.apply(Math, A);
  };
  console.log(A);
  posArray = A.filter(function(x) {
    return x > -1;
  });

  let minimum = Array.min(A);
  let findNum = 0;
  let isFound = false;

  while (!isFound) {
    let isIn = posArray.includes(findNum);
    if (!isIn) {
      findNum += 1;
    } else {
      isFound = true;
    }
  }

  return findNum;
}

[1, 2, 3, 5][(-1, -2, 2, 3, 5)][(1, 2, 3, 5)][(1, 2, 3, 5)][(1, 0, 3, 4, 2)];
