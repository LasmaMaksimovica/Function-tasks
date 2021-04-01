// Write a function to compute the factors of a positive integer.

let sum;
function computeIntegers(number) {
    sum = 0;
    for (i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    console.log(sum);
}


computeIntegers(3)
computeIntegers(4)
computeIntegers(5)