// arr must in certain range
// arr in range 0 - 2
function bucketSort(arr) {
  let counts = [0,0,0]

   for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] += 1
   }

   let i = 0
   for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j < counts[n]; j++) {
      arr[i] = n
      i++
    }
   }
}

let test = [2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0]
bucketSort(test)

console.log(test)