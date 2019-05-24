function solution(U, L, C) {
  let top = '';
  let bottom = '';
  let topFull = false;
  let topTotal = 0;
  let botTotal = 0;
  answer = '';

  for (let i = 0; i < C.length; i++) {
    if (C[i] === 0) {
      top += '0';
      bottom += '0';
    } else if (C[i] === 1 && !topFull) {
      top += '1';
      bottom += '0';
      topTotal++;
      if (topTotal === U) {
        topFull = true;
      }
    } else if (C[i] === 1 && topFull) {
      top += '0';
      bottom += '1';
      botTotal++;
    } else {
      top += '1';
      bottom += '1';
      topTotal++;
      botTotal++;
    }
  }
  if (botTotal > L) {
    answer = 'IMPOSSIBLE';
  } else {
    answer = topTotal + ',' + botTotal;
  }
  return answer;
}
