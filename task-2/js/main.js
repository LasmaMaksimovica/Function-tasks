function checkPalindrome(stringEntry) {
    const arrayNoFormat = stringEntry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    const array = arrayNoFormat.split('');
    const arrayRevesed = array.reverse();
    const arrayJoined = arrayRevesed.join('')
    if (arrayNoFormat == arrayJoined || arrayJoined == arrayNoFormat) {
        console.log('is palindrome')
    } else {
        console.log('in not palindrome')
    }

}
checkPalindrome('madam');
checkPalindrome('nurses run');
checkPalindrome('house');