// 13. Write a function addTask that takes an array of tasks and a task to add to the list. The
// function should return the updated array of tasks.



function addTask(tasks, newTask) {

    tasks.push(newTask)
    return tasks;
}
const tasks = ['Buy groceries', 'Clean the house'];

console.log(addTask(tasks, 'Pay bills'));