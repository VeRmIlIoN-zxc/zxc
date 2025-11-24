function calculatePerimeter(side) {
    if (typeof side !== 'number' || side <= 0) {
        throw new Error('Сторона должна быть положительным числом');
    }
    return 4 * side;
}

console.log(calculatePerimeter(5))
console.log(calculatePerimeter(3.5))
console.log(calculatePerimeter(10))

console.log(50);
console.log(10);

function hoursFromStartOfDay(n) {
    return Math.floor(n / 3600);
}

console.log(hoursFromStartOfDay(3600))
console.log(hoursFromStartOfDay(7200))
console.log(hoursFromStartOfDay(5000))
console.log(hoursFromStartOfDay(86400))

function reverseDigits(num) {
    
    if (num < 10 || num > 99 || !Number.isInteger(num)) {
        throw new Error("Число должно быть двузначным");
    }
    
    const tens = Math.floor(num / 10);   
    const units = num % 10;              
    return units * 10 + tens;            
}

console.log(reverseDigits(23))
console.log(reverseDigits(57))
console.log(reverseDigits(10))
console.log(reverseDigits(99))
