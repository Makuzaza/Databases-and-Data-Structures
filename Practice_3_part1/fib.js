//Write a recursive func,on called fib which accepts a number and returns
//the nth number in the Fibonacci sequence.
//Recall that the Fibonacci sequence is the sequence of whole numbers 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
//which starts 1 and 1, and where every number thereaHer is equal to the sum of the previous two numbers
//https://en.wikipedia.org/wiki/Fibonacci_number

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n < 0) {
    return "Write positive integer";
  } else {
    return fib(n - 1) + fib(n - 2);
}
}

console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(10)) // 55
