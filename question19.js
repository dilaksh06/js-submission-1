

// 19. Write a function registerUser that takes an array of user objects and a new user object,
// checks if the username already exists, and if not, adds the new user to the array

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