// 5. Given an array of mixed data types, the end user needs the sum of squared numbers in
// this array. Write a program for this.
// const array = [4, ‘hello’, 3, true, ‘Uki’, 5];


const array = [4, "hello", 3, true, "Uki", 5];

function squaredNumbers() {
    const numbers = array.filter(function (num) {
        if (typeof (num) == 'number') {
            return num;
        }
    })
    const squrenumbers = numbers.map(function (num) {
        return num * num
    })
    const sum = squrenumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return sum;

}

console.log(squaredNumbers())