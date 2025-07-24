//Using Set without arrow function
let array =[1,3,2,4,5,2,2,1,2,3,9]

const unique = [...new Set(array)];

console.log(unique); [ 1, 3, 2, 4, 5, 9 ]


//Using arrow Function
let array1 =[1,3,2,4,5,2,2,1,2,3,9]
const unique1 = array  =>  [...new Set(array)];
console.log(unique(array))


//Using filter with indexOf

const filterValue = array.filter((item,index) => 
    array.indexOf(item) === index);

 console.log(filterValue); // [ 1, 3, 2, 4, 5, 9 ]

 //using reduce

 const a1 = array1.reduce(function(acc,curr)
{
    if(!acc.includes(curr))
    {
        acc.push(curr);
    }
    return acc;
},[]);
console.log(a1);// [ 1, 3, 2, 4, 5, 9 ]


//using reduce in shorthand
const data = a.reduce((partial, item) => {
  return partial.includes(item) ? partial : [...partial, item];
}, []);

// Using forEach

const unique2 = [];
array1.forEach(item => {
    if(!unique2.includes(item)) {
        unique2.push(item);
    }
});
console.log(unique2);// [ 1, 3, 2, 4, 5, 9 ]

s