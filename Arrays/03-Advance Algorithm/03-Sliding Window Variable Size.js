// Q1. Find the length of longest sub array, with the same value in each position.
function slidingWindow(arr) {
  let res = 1
  let L = 0

  for (let R = 0; R < arr.length; R++) {
    if (arr[R] !== arr[L]) {
      L = R
    }

    res = Math.max(res, R - L + 1)
  }

  return res
}


// Q2. Find the minimum length sub array, where the sum is greater than or equal to threshold. Assume all value are positive.
function slidingWindow2 (arr, threshold) {
  let sum = 0
  let L = 0
  let minLen = Number.MAX_VALUE

  for (let R = 0; R < arr.length; R++) {
    sum += arr[R]

    while (sum >= threshold) {
      minLen = Math.min(minLen, R - L + 1)
      sum -= arr[L]
      L++
    }
  }
  return minLen === Number.MAX_VALUE ? 0 : minLen
}

let test = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
console.log(slidingWindow(test))
console.log(slidingWindow2(test, 12))
