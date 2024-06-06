// 2. Given an array of numbers, write a function to create a new array that only contains the
// even numbers.
// const numbers = [1, 2, 3, 4, 5, 6];


var numbers = [1, 2, 3, 4, 5, 6];

function evenNumers() {
    var newArray = [];
    for (num in numbers) {

        //console.log(numbers[num]);
        if (numbers[num] % 2 == 0) {
            newArray.push(numbers[num]);
        }
    }
    console.log(newArray);
}

evenNumers();