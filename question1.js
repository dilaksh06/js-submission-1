//1 . Write a function that converts an array of strings to uppercase.
// const strings = ["hello", "world"];


const strings = ['hello', 'world'];

function UpCse() {
    for (strng in strings) {
        (strings[strng] = strings[strng].toUpperCase());
    }
    console.log(strings);
}

UpCse()