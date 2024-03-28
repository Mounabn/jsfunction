
//Reverse a String
function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

//Count Characters
  function countCharacters(str) {
    return str.length;
  }
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}


//array

// Find Maximum Value

  function findMin(arr) {
    return Math.min(...arr);
  }
  
  function findMax(arr) {
    return Math.max(...arr);
  }

// Sum of Array
function sumOfArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
  }


  // Filter Array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }



  // Mathematical Functions

  // Factorial// This function calculates the factorial of a given number
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
        return n * factorial(n - 1);
    }
    
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Fibonacci Sequence
  function generateFibonacciSequence(n) {
    const sequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence;
  }