// Write a function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.




function alfabeticalOrder(stringUnalfabetical) {
    return stringUnalfabetical.split('').sort().join('');

}

console.log(alfabeticalOrder('webmaster'));