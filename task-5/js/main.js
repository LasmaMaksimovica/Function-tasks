function upperCase(stringLowerCase) {
    const array = stringLowerCase.split(' ');
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newArray.join(' ');
}
console.log(upperCase('the quick brown fox'));
