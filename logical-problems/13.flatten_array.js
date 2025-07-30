// Write a function to flatten a nested array.

function flattenArray(arr) {
  let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element)); // recursive call
    } else {
      result.push(element);
    }
  }

  return result;
}

// Example usage:
console.log(flattenArray([1, [2, [3, [4]], 5]])); 
// Output: [1, 2, 3, 4, 5]




const result = arr => arr.flat(arr);   

let arr =[1, [2, [3, 4]], 5];
console.log(result(arr));