// 8. Write a function getHighGrades that takes an array of student objects (each with name
//     and grade properties) and returns an array of names of students with grades higher
//     than 80.
//     const students = [
//     { name: 'Alice', grade: 90 },
//     { name: 'Bob', grade: 70 },
//     { name: 'Charlie', grade: 85 }
//     ];


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