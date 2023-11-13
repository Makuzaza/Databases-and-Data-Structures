//Write a func,on called stringifyNumbers which takes in an object and finds all of the values
//which are numbers and converts them to strings.
//Recursion would be a great way to solve this task.

function stringifyNumbers(obj) {
  // Create a new object to avoid modifying the original object
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      // Convert number to string if the value is a number
      result[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      // Recursively call stringifyNumbers for nested objects
      result[key] = stringifyNumbers(obj[key]);
    } else {
      // Copy non-number and non-object values as they are
      result[key] = obj[key];
    }
  }

  return result;
}

// Example usage:
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

let result = stringifyNumbers(obj);
console.log(result);


/*
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}*/
