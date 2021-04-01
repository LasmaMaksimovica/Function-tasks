// Write a function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all it


let checkPerfectNumber;
function perfectNumber(number) {
    checkPerfectNumber = 0;
    for (i = 1; i < number; i++) {
        if (number % i === 0) {
            checkPerfectNumber += i;
        }
    }
    if (number === checkPerfectNumber) {
        console.log(number, 'is perfect number');
    }
}
perfectNumber(6);
perfectNumber(12);
perfectNumber(28);