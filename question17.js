// 17. Write a function applyDiscount that takes a price and a discount percentage, and returns the
// price after the discount has been applied. Use default parameters to set the discount
// percentage to 10% if not provided.



function applyDiscount(price, discount = 10) {
    var newPrice = price - (price * (discount / 100))
    return newPrice;
}
var price = 740;
console.log(applyDiscount(price));