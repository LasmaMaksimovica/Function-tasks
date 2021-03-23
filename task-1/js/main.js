// Example x = 32243;
// 1. Write a function that reverse a number.
// Expected Output : 34223

function reversedNumber(number) {
    return number.split('').reverse().join('');
}
console.log(reversedNumber('32243'))