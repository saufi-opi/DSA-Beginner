function mergeSort(arr, s, e) {
  // base case - when one element only left in array
  if (e - s + 1 <= 1) return arr

  let m = Math.floor((s + e) / 2)

  mergeSort(arr, s, m)
  mergeSort(arr, m + 1, e)
  merge(arr, s, m, e)
}

function merge(arr, l, m, r) {
  let len1 = m - l + 1
  let len2 = r - m

  let leftArray = new Array(len1)
  let rightArray = new Array(len2)

  for (let i = 0; i < len1; i++) {
    leftArray[i] = arr[i + l]
  }

  for (let i = 0; i < len2; i++) {
    rightArray[i] = arr[i + m + 1]
  }

  let i = 0
  let j = 0
  let k = l

  while (i < len1 && j < len2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i]
      i++
    } else {
      arr[k] = rightArray[j]
      j++
    }
    k++
  }

  while (i < len1) {
    arr[k] = leftArray[i]
    i++
    k++
  }

  while (j < len2) {
    arr[k] = rightArray[j]
    j++
    k++
  }
}


let test = [9,8,1,6,5,4]
mergeSort(test, 0, test.length - 1)

console.log(test)