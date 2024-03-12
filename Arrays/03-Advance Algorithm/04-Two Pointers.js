// superset of sliding window
// two pointers - care about the exact value at the pointers
// sliding window - care about the value inside the window

// Q1. Check palindrome array
function isPalindrome(arr) {
  let L = 0,
    R = arr.length - 1

  while (L < R) {
    if (arr[L] !== arr[R]) {
      return false
    }
    L++
    R--
  }
  return true
}

// Q.2 Given sorted array of integers, return indices of two elements (in different position)
// that sum up to the target value. Assume there is exactly one solution
// O(n)
function targetSum(arr, target) {
  let L = 0,
    R = arr.length - 1

  while (L < R) {
    if (arr[L] + arr[R] > target) {
      R--
    } else if (arr[L] + arr[R] < target) {
      L++
    } else {
      return [L, R]
    }
  }
}

let arr = [1,3,4,5,9]
console.log((targetSum(arr, 7)))
