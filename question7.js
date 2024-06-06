// 7. Create a function createPerson that returns an object representing a person with
// properties name, age, and a method greet that logs a greeting message something like
// "Hello, my name is John and I am 25 years old."



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