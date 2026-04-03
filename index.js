function calculateTax(amount){
    return amount*=0.1;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2){
    if (num1>num2){
        return num1;
    }        
    else{return num2;}
}

function isPalindrome(word){
    let reversed=word.split("").reverse().join("");
    return word===reversed;
}

function calculateDiscountedPrice(originalPrice, discountedPercantage){
    let discount = discountedPercantage/100 *originalPrice
    return originalPrice - discount;
}

console.log(calculateTax(100));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(10,15));
console.log(isPalindrome("madam"));
console.log(calculateDiscountedPrice(100,20));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };