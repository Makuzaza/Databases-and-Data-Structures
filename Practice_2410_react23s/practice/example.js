function sumRange(num) {   
    if(num === 1) 
    return 1;    
return num + sumRange(num-1);
}

console.log(sumRange(100));

// Recursive function example

function factorial(num) {    
    let total = 1;    
    for (let i = num; i > 1; i--) {       
        total *= i    
    }    
    return total;
}

console.log(factorial(6));

// factorial (iteratively)


function factorialRecursive (num) {    
    if (num === 1) 
    return 1;    
return num * factorialRecursive (num-1);
}

console.log(factorialRecursive(5));

// factorial (recursively)
