//Given a string with three types of brackets: (), {}, and [].
// Validate they are correctly closed and opened.
// - Create a function called "isParenthesesValid" that takes in a string as a parameter.
// - Create a map that pairs opening parentheses with their corresponding closing parentheses.
// - Create an empty stack.
// - Iterate through each character in the string.
// - If the character is an opening parentheses, push the corresponding closing parentheses onto the stack.
// - If the character is not an opening parentheses, check if it matches the top element of the stack (the expected closing parentheses).
// - If it does not match, return false.
// - If the iteration is complete and there are still elements in the stack, return false.
// - Otherwise, return true.

function isParenthesesValid(string) {

    let stack = [];
    let openingBrackets = ['(', '{', '['];
    let closingBrackets = [')', '}', ']'];
    
    for (let i = 0; i < string.length; i++) {
        let symbol = string[i];
        
        if (openingBrackets.includes(symbol)) {
            stack.push(symbol);
        } else if (closingBrackets.includes(symbol)) {
            let matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(symbol)];
            if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// function isParenthesesValid(string) {
//     const map = new Map([
//     ['(', ')'],
//     ['{', '}'],
//     ['[', ']'],
//     ]);
//     const stack = [];
//     for (const c of string) {
//     if (map.has(c)) stack.push(map.get(c));
//     else if (c !== stack.pop()) return false;
//     }
//     return stack.length === 0;
//    }

console.log(isParenthesesValid('(){}[]')); // true
console.log(isParenthesesValid('(')); // false
console.log(isParenthesesValid('([{}])')); // true
console.log(isParenthesesValid('[{]}')); // false
console.log(isParenthesesValid('([{)}]')); // false