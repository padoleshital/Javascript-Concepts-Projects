function sortAscending(num) {
    let digit = [];
    
    // Extract digits
    while (num > 0) {
        digit.push(num % 10);
        num = Math.floor(num / 10);
    }

    // Sort the digits in ascending order
    digit.sort((a, b) => a - b);

    // Combine digits back into a number
    let sortedNum = 0;
    for (let i = 0; i < digit.length; i++) {
        sortedNum = sortedNum * 10 + digit[i];
    }

    return sortedNum;
}

let num = 6175615;
console.log(sortAscending(num)); // Output: 1115567