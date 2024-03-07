// Kadane's algorithm used for finding max sub array sum of an array O(n)

// 1. return the maxsum sub array
function kadanes (nums) {
  let max = nums[0]
  let curr = 0

  for (let n of nums) {
    curr = Math.max(curr, 0)
    curr += n
    max = Math.max(curr, max)
  }

  return max
}

// 2. return the index of maxsum sub array
function kadanes2 (nums) {
  let max = nums[0]
  let maxL = 0
  let maxR = 0
  let curr = 0
  let L = 0

  for (let R = 0; R < nums.length; R++) {
    if (curr < 0) {
      curr = 0
      L = R
    }

    curr += nums[R]

    if (curr > max) {
      max = curr
      maxL = L
      maxR = R
    }
  }

  return [maxL, maxR]
}

let test = [-2,1,-3,4,-1,2,1,-5,4]
console.log(kadanes(test))
console.log(kadanes2(test))