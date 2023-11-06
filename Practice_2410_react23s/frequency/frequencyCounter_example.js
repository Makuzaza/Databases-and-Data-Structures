//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has
//it's corresponding value squared in the second array.
//The frequency of values must be the same.


function same (array1, array2) {
// if array length of array in 1 is not equal to
// array length of second array, return false
    if (array1.length !== array2.length) {
        return false;
    }

// for every array items
// let's take indexof that array item and multiply by 2
for (let i=0; i<array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2)
    if (correctIndex === -1) {
        return false;
    }
    array2.splice(correctIndex, 1)
}
return true;
};


console.log(same([1,2,3], [4,1,9])); // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)
