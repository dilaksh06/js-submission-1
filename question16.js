// 16. Write a function inventoryValue that takes an array of product objects (each with properties
//     name, price, and quantity) and returns the total value of the inventory.
//     javascript


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
