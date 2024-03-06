function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    while ( j >= 0 && arr[j + 1] < arr[j]) {
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
      j--
    }
  }
  return arr
}

console.log(insertionSort([1,2,5,9,7,5]))