let bribechecker = q => {
  function minimumBribes(q) {
    let chaotic = false;
    let sorted = false;
    let bribes = 0;
    let qq = q
    while (!chaotic && !sorted) {
        for (let index = q.length-1; index >= 0; index--) {
					sorted = true;
            process.stdout.write(`${qq.toString()}-${index.toString()} `);
            process.stdout.write(`[${qq[index].toString()} ${index.toString()}]`)
            if (qq[index-1] !== index) {
                sorted = false;
                process.stdout.write(`(${qq[index-1].toString()} ${index.toString()})`)
                if (qq[index] > (qq[index - 2])) {
                    chaotic = true;
                    process.stdout.write(`CHAOTIC!`)
                } else {
                    [qq[index], qq[index - 1]] = [qq[index - 1], qq[index]];
                    bribes += 1;
                }
                break;
            }
        }
    }

    if (chaotic === true) {
        return 'Too chaotic';
    } else {
        return bribes;
    }
};


