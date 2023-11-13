//Write a func,on called productOfArray which takes in array
//of numbers and returns the product of them all .

// HINT: array method e.g. slice

// function productOfArray(arr) {
//     if (i = 0) {
//         return 0
//     } else if {
//         for (let i = 0; i < arr.length; i++) {
// arr.length - 1
//     }}
// };

function productOfArray(arr) {
    if (arr.length === 0) {
      return 1; // Base case: empty array, so the product is 1
    } else {
      // Recursive case: multiply the first element by the product of the rest of the array
      return arr[0] * productOfArray(arr.slice(1));
    }
  }
  
  // Examples
  console.log(productOfArray([1, 2, 3]));     // 6
  console.log(productOfArray([1, 2, 3, 10])); // 60
  
