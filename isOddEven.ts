function isEven(num: number): boolean {
    return num % 2 === 0;
}

function isOdd(num: number): boolean {
    return !isEven(num);
}

// Example usage:
const num = 5;

if (isEven(num)) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}
