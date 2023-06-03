function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element) {
            return i
        } 
    }
    return -1
   
}

function recursiveBinarySearch(arr, element){
    //  search through the array recursively for the element
    //  you may need to add some default parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    if(arr.length === 1 && arr[0] !== element) return -1
    const middle =  Math.floor(arr.length - 1)
    if(arr[middle] === element) return middle

    if(arr[middle] > element) {
        return recursiveBinarySearch(arr.slice(0, middle), element)
    } else {
        return recursiveBinarySearch(arr.slice(middle), element)
    }
}

console.log(binarySearch([1,3,5,7,9], 30))
console.log(recursiveBinarySearch([1,3,5,7,9], 9))