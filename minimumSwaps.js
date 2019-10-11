function minimumSwaps(arr) {

  let swap = 0;

  for (let i = 0; i < arr.length; i++) { 
    while (i+1 !== arr[i]) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i]
      arr[i] = temp;
      swap += 1;
    }
  }

  return swap;
};

const test = minimumSwaps([4, 3, 1, 2]);

console.log(test);

/*

  4 3 1 2
 
  1. 1 3 4 2
  2. 1 2 4 3
  3. 1 2 3 4

  res: 3

*/