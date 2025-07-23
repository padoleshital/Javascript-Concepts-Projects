//Array in javascript  are nothing but object
var array = [1,2,3];
console.log(typeof(array)); //[ 1, 2, 3 ]

var objArray = {
    0: 1,
    1: 2,
    2: 3
}

console.log(typeof(objArray)); //object

//how to check whether is array or not.

console.log(Array.isArray([1,2,3])); // true

console.log(Array.isArray({})) // false