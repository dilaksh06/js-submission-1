
// 4. Write a function using the reduce method that concatenates an array of strings into a
// single string, with each word separated by a space.
// const words = ["hello", "world", “javascript"];


const words = ["hello", "world", "javascript"];

function Reduce() {
    var JOin = words.reduce((initialValue, CurrentValue) => initialValue + " " + CurrentValue)
    console.log(JOin);
}

Reduce();