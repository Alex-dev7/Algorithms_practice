function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end
    
    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array
    let swapHappened = true
    let i  = 0
    while (i < array.length) {
     
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
               swapHappened = !swapHappened
            }
        }
        i += 1
    }
    return array;
}

console.log(bubbleSort([ 12, 6, 3 ,21 , 56 ,879 ,9897 ,6756 ,34, -23, 0.44, -0.6557 ]))





function insertionSort (array) {
  // Loop through each element

  // store the current item value so it can be placed correctly
  // in the sorted portion of the array

  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!

  for (let i = 0; i < array.length; i++) {
    for(let j = i; j > 0; j-- ){
        if(array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
        }
    }
  }

  return array;
}

console.log(insertionSort([ 12, 6, 3 ,21 , 56 ,879 ,9897 ,6756 ,34, -23, 0.44, -0.6557 ]))
