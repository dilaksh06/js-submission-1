//1 . Write a function that converts an array of strings to uppercase.
// const strings = ["hello", "world"];

console.log("Question No1");
const strings = ['hello', 'world'];

function UpCse() {
    for (strng in strings) {
        (strings[strng] = strings[strng].toUpperCase());
    }
    console.log(strings);
}

UpCse()



// 2. Given an array of numbers, write a function to create a new array that only contains the
// even numbers.
// const numbers = [1, 2, 3, 4, 5, 6];

console.log("Question No2");
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


// 3. Write a function that removes all the empty strings from an array of strings.
// const strings = ["hello", "", "world", "", “javascript"];


console.log("Question No3");
const strings1 = ["hello", "", "world", "", "javascript"];

function emptystrings1() {
    for (strng in strings1) {

        if ((strings1[strng].length) === 0) {

            strings1.splice(strng, 1)
        }
    }
    console.log(strings1);
}

emptystrings1();


// 4. Write a function using the reduce method that concatenates an array of strings into a
// single string, with each word separated by a space.
// const words = ["hello", "world", “javascript"];


const words = ["hello", "world", "javascript"];

console.log("Question No4");
function Reduce() {
    var JOin = words.reduce((initialValue, CurrentValue) => initialValue + " " + CurrentValue)
    console.log(JOin);
}

Reduce();



// 5. Given an array of mixed data types, the end user needs the sum of squared numbers in
// this array. Write a program for this.
// const array = [4, ‘hello’, 3, true, ‘Uki’, 5];


console.log("Question No5");
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


// 6. Write a function named reverseArray that takes an array as input and returns a new
// array with the elements in reverse order.
/* ------------------properties and methods ------------------------*/

console.log("Question No6");
var Reversenumber = [1, 2, 3, 4, 5, 6];

function Revers() {
    Reversenumber = Reversenumber.reverse();
    console.log(Reversenumber);
}

Revers()



// 7. Create a function createPerson that returns an object representing a person with
// properties name, age, and a method greet that logs a greeting message something like
// "Hello, my name is John and I am 25 years old."


console.log("Question No7");

function createPerson(Name, Age) {
    return {
        name: Name,
        age: Age,
        greet: function () {
            console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old");
        }
    };

}

createPerson("dilakshan", 25).greet()



// 8. Write a function getHighGrades that takes an array of student objects (each with name
//     and grade properties) and returns an array of names of students with grades higher
//     than 80.
//     const students = [
//     { name: 'Alice', grade: 90 },
//     { name: 'Bob', grade: 70 },
//     { name: 'Charlie', grade: 85 }
//     ];

console.log("Question No8");
const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
];


function getHighGrades(students) {
    var names = [];
    for (student in students) {
        if ((students[student].grade > 80))
            names.push(students[student].name);
    }
    return (names);
}

console.log(getHighGrades(students))



// 10. Write a JavaScript code to check if a variable age is greater than or equal to 18, and print
// "Adult" if true.

console.log("Question No10");

var age = 90;

if (age >= 18) {
    console.log("Adult");
}


// 11. Write a JavaScript code to check if a variable score is passing (>=50), and print "Pass" if true,
// otherwise print "Fail".

console.log("Question No11");

var score = 45;
if (score >= 50) {
    console.log("pass");
} else {
    console.log("fail");
}

// 12. Write a JavaScript code to categorize a variable grade into "Excellent" (>=90), "Good"
// (>=75), "Average" (>=50), and "Poor" (<50).


console.log("Question No12");

var grade = 52;
if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 75) {
    console.log("Good");
} else if (grade >= 50) {
    console.log("AVerage");
} else if (grade < 50) {
    console.log("Poor");
}


// 13. Write a function addTask that takes an array of tasks and a task to add to the list. The
// function should return the updated array of tasks.

console.log("Question No13");

function addTask(tasks, newTask) {

    tasks.push(newTask)
    return tasks;
}
const tasks = ['Buy groceries', 'Clean the house'];

console.log(addTask(tasks, 'Pay bills'));



// 14. Write a function findCommonElements that takes two arrays and returns an array
// containing the common elements between the two.

console.log("Question No14");

function findCommonElements(arr1, arr2) {
    var arr3 = [];
    for (i in arr1) {
        //console.log(arr1[i]);
        for (x in arr2) {
            //console.log(arr2[x]);
            if (arr1[i] === arr2[x]) {
                //console.log("yes");
                arr3.push(arr1[i]);
            }

        }
    }
    return arr3;

}
console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]



// 15. Write a function updateEmployeeRecord that takes an employee object and an object of
// updates, and returns the updated employee object.

console.log("Question No15");

function updateEmployeeRecord(employee, updates) {

    employee.position = updates.position;
    employee.salary = updates.salary;
    return employee;
}

const employee = { name: 'John', position: 'Developer', salary: 50000 };

const updates = { position: 'Senior Developer', salary: 60000 };

console.log(updateEmployeeRecord(employee, updates)); // { name: 'John', position:'Senior Developer', salary: 60000 }


// 16. Write a function inventoryValue that takes an array of product objects (each with properties
//     name, price, and quantity) and returns the total value of the inventory.
//     javascript

console.log("Question No16");
function inventoryValue(products) {
    var total = [];
    // Your code here
    for (i in products) {
        total.push(((products[i].price) * (products[i].quantity)))


    }
    return (total.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
}

const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 }
];

console.log(inventoryValue(products)); // 10000


// 17. Write a function applyDiscount that takes a price and a discount percentage, and returns the
// price after the discount has been applied. Use default parameters to set the discount
// percentage to 10% if not provided.

console.log("Question No17");

function applyDiscount(price, discount = 10) {
    var newPrice = price - (price * (discount / 100))
    return newPrice;
}
var price = 740;
console.log(applyDiscount(price));




// 18. Write a recursive function factorial that takes a number n and returns the factorial of n.

console.log("Question No18");

var num;

function factorial(n) {
    var x = 1;
    for (i = 1; i <= n; i++) {

        x = x * i

    }
    return x;
}

console.log(factorial(num = 5))


// 19. Write a function registerUser that takes an array of user objects and a new user object,
// checks if the username already exists, and if not, adds the new user to the array

console.log("Question No19");
const user = [
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
];

const Newuser = [
    { name: "e" },
    { name: "f" },
    { name: "g" },
];

function registerUser(user, Newuser) {
    for (let i in Newuser) {
        let newUser = Newuser[i];
        let userExists = false;

        for (let x in user) {
            if (user[x].name === newUser.name) {
                userExists = true;
                break;
            }
        }

        if (!userExists) {
            user.push(newUser);
        }
    }

    return user;
}

console.log(registerUser(user, Newuser)); 