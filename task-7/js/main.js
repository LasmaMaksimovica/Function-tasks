// Write a function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


function vowelCount(string) {
    const vowelList = 'eaiouAEIOU';
    let vowelCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (vowelList.indexOf(string[i]) !== -1) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(vowelCount('The quick brown fox'));