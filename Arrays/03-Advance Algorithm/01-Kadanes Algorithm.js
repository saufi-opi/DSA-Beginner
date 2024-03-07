// Kadane's algorithm used for finding max sub array sum of an array O(n)
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

let test = [-2,1,-3,4,-1,2,1,-5,4]

console.log(kadanes(test))