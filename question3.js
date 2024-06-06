// 3. Write a function that removes all the empty strings from an array of strings.
// const strings = ["hello", "", "world", "", “javascript"];



const strings = ["hello", "", "world", "", "javascript"];

function emptystrings() {
    for (strng in strings) {

        if ((strings[strng].length) === 0) {

            strings.splice(strng, 1)
        }
    }
    console.log(strings);
}

emptystrings();