
// 18. Write a recursive function factorial that takes a number n and returns the factorial of n.



var num;

function factorial(n) {
    var x = 1;
    for (i = 1; i <= n; i++) {

        x = x * i

    }
    return x;
}

console.log(factorial(num = 5))