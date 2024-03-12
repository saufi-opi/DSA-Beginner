// A data structure where we store the sum of the prefix of an array

// Q1. Given an array of integers, design a data structure that can query the sum of a sub array using two index

class PrefixSum {
  prefix = []

  constructor(arr) {
    let sum = 0
    for (let n of arr) {
      sum += n
      this.prefix.push(sum)
    }
  }

  rangeSum(L, R) {
    let preSumR = this.prefix[R]
    let preSumL = L > 0 ? this.prefix[L - 1] : 0
    return preSumR - preSumL
  }
}

let test = [1, 2, 3, 4, 5, 6]
let ps = new PrefixSum(test)
console.log(ps.rangeSum(2, 4))
