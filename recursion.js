// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index = 0){
    // This function returns the largest number in a given array.
    if(arr[index] > arr[index + 1]){
      return arr[index]
    }
    return findMax(arr, index + 1)
}

// console.log(findMax([3,4,2,1,2])) //expected output 4


function factorial(n, sum = 0){
    // This function returns the factorial of a given number.
    if(n === 1){
        return sum
    }
    if(sum === 0){
        sum = n * (n - 1) 
        return factorial(n -= 1, sum )
    }
  
    return factorial(n -= 1, sum = sum * n)
}

// console.log(factorial(5))

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if(n === 0 || n === 1) {
        return n
    }
    return fibonacci(n -1) + fibonacci(n - 2)
}

// console.log(fibonacci(3))

function coinFlips(n, arr = [], result = []){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if (n === 0) {
        result.push(arr.join(""));
      } else {
        coinFlips(n - 1, arr.concat('H'), result);
        coinFlips(n - 1, arr.concat('T'), result);
        
      }
      return result;
}

console.log(coinFlips(2))

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}


