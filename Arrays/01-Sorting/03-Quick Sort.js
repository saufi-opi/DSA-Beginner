function quickSort (arr, s, e) {
  // base case - if one element left in the array
  if (e - s + 1 <= 1) {
    return arr
  }

  let pivot = arr[e]
  let ptr = s

  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      let temp = arr[ptr]
      arr[ptr] = arr[i]
      arr[i] = temp
      ptr++
    }
  }

  // place pivot value in between lower and higher than pivot position
  arr[e] = arr[ptr]
  arr[ptr] = pivot

  // perform sort on both side excluding the pivot
  quickSort(arr, s, ptr - 1)
  quickSort(arr, ptr + 1, e)

  return arr
}

let test = [9,8,1,6,5,4]
quickSort(test, 0, test.length - 1)

console.log(test)