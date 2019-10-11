function minimumBribes(q) {

  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--){
      if (q[i] - i > 3){
          swaps = 'Too chaotic';
          break;
      }
      if (q[i] > i+1){
          swaps += (q[i]-(i+1));
      } else {
          if (min > q[i]){
              min = q[i];
          } else if (q[i] != min){
              swaps++;
          }
      }
  }
  
  console.log(swaps);

}

const test = minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
console.log(test);