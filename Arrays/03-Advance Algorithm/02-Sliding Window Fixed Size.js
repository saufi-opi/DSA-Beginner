// Eg.1 - Given an Array, return true if there are duplicates number in a window size = k
// 1 - Bruteforce solution
function bruteForce (arr, k) {
  for (let l = 0; l < arr.length; l++) {
    for (let r = l + 1; r < Math.min(arr.length, l + k); r++) {
      if (arr[l] === arr[r]) {
        return true
      }
    }
  }

  return false
}

// 2 - sliding window
function slidingWindow (arr, k) {
  let window = new Set()
  let L = 0

  for (let R = 0; R < arr.length; R++) {
    if (R - L + 1 > k) {
      window.delete(arr[L])
      L++
    }
    if (window.has(arr[R])) {
      return true
    }
    window.add(arr[R])
  }

  return false
}

let test = [1,2,3,4,3]
let size = 2

console.log(bruteForce(test, size))
console.log(slidingWindow(test, size))