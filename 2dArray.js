function hourglassSum(arr) {

  const sums = [];

  const getHourglassSum = (row, col) => {
      const vals = [];
      let sum = 0;

      console.log('----------\n',arr[row][col], 
        arr[row][col+1], 
        arr[row][col+2], 
        '\n',
        ' ', arr[row+1][col+1], 
        '\n',
        arr[row+2][col],
        arr[row+2][col+1],
        arr[row+2][col+2], 
        '\n')


      vals.push(
          arr[row][col], 
          arr[row][col+1], 
          arr[row][col+2],
          arr[row+1][col+1],
          arr[row+2][col],
          arr[row+2][col+1],
          arr[row+2][col+2]
      )

      vals.forEach(val => (sum += val));

      console.log('sum: ', sum)

      return sum; 
  };

  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          sums.push(getHourglassSum(i, j));
      }
  };

  console.log('----------\nGreatest Sum: ', Math.max(...sums), '\nNumber of hourglasses: ', sums.length, '\n');

  return Math.max(...sums);
};

const test = hourglassSum(
  [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ]
);

console.log(test);