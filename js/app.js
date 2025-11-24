function isDivisible(a, b) {
    
    if (b === 0) {
        return false; 
    }
    return a % b === 0;
}


console.log(isDivisible(10, 2))
console.log(isDivisible(10, 3))
console.log(isDivisible(15, 5))
console.log(isDivisible(7, 0))

function printSecondToLast(str) {
    if (str.length > 1) {
        console.log(str[str.length - 2]);
    }
}

printSecondToLast("Hello")
printSecondToLast("JS")   