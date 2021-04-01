// 11. Write a function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

const arrayOfNumbers = [1, 3, 4, 2, 5];
let result = [];

function selectedNumbers(numbers) {

    x = numbers.sort();
    result = result.push(x[1], x[x.length - 2]);
    return result;

}
console.log(selectedNumbers(arrayOfNumbers));