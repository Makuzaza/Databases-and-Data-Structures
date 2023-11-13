//Write a recursive func,on called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

function isPalindrome(str) {
    if (str.length <= 1) {
      return false;
    }
  
    // the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
      // If the first and last characters are the same, check the palindrome for the remaining substring
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  
  // Examples
  console.log(isPalindrome("racecar"));    // true
  console.log(isPalindrome("hello"));      // false
  console.log(isPalindrome("level"));      // true
  console.log(isPalindrome("aabbaa"));     // true
  console.log(isPalindrome("abcdeedcba")); // true
  