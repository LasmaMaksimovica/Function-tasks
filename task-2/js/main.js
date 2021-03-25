// 2. Write a function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checkPalindrome(stringEntry) {
    const arrayNoFormat = stringEntry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    const array = arrayNoFormat.split('');
    const arrayRevesed = array.reverse();
    const arrayJoined = arrayRevesed.join('')
    if (arrayNoFormat == arrayJoined) {
        console.log('is palindrome')
    } else {
        console.log('in not palindrome')
    }

}
checkPalindrome('madam');
checkPalindrome('nurses run');
checkPalindrome('house');