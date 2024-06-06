// 15. Write a function updateEmployeeRecord that takes an employee object and an object of
// updates, and returns the updated employee object.


function updateEmployeeRecord(employee, updates) {

    employee.position = updates.position;
    employee.salary = updates.salary;
    return employee;
}

const employee = { name: 'John', position: 'Developer', salary: 50000 };

const updates = { position: 'Senior Developer', salary: 60000 };

console.log(updateEmployeeRecord(employee, updates)); // { name: 'John', position:'Senior Developer', salary: 60000 }
