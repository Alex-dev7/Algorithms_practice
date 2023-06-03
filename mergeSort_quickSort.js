function mergeSort(arr) { /// run-time complexity O(n log n) = quasilinear time
    // YOUR CODE HERE     /// sapce complexity O(n)
    if(arr.length <= 1) return arr

    let middle = Math.floor(arr.length / 2)

    //------- using JS slice method
    const leftArray = arr.slice(0, middle)
    const rightArray = arr.slice(middle)

    //-------  whithout slice method
    // const leftArray = []
    // const rightArray = []
 
    // for(let i = 0; i < arr.length; i++) {
    //   if(i < middle) {
    //     leftArray.push(arr[i])
    //   } else {
    //     rightArray.push(arr[i])
    //   } 
    // }

    return merge(mergeSort(leftArray), mergeSort(rightArray))

  }
  
  function quickSort(arr){
    // YOUR CODE HERE
  }
  
  
  // HELPER FUNCTION: merge two sorted arrays
  function merge(arr1, arr2) {
    var result = [];
    console.log(arr1, arr2)
    while (arr1.length && arr2.length) {
      if(arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }
  
    return result.concat(arr1, arr2);
  }


 console.log(mergeSort([12,6,3,7,13,8]))