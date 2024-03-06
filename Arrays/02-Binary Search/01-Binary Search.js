function binarySearch(arr, target) {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    let m = Math.floor((l+ r) / 2)

    if (arr[m] > target) {
      r = m - 1
    } else if (arr[m] < target) {
      l = m + 1
    } else {
      return m
    }
  }

  return -1
}

let sortedTest = [1,2,5,77,88,99,101]

let found = binarySearch(sortedTest, 88)

console.log(found)