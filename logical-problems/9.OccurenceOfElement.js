//find out the occurrence of each and every number in that array.
// without arrow function
let arr =[2, 3, 2, 4, 5, 2, 6, 4];
let frequency = {};
arr.forEach(num =>{
    frequency[num] = (frequency[num] || 0) + 1; //{ '2': 3, '3': 1, '4': 2, '5': 1, '6': 1 }
});

console.log(frequency);



// with foreach arrow function

function Occurence(arr)
{
    let newObj ={};
    arr.forEach(res =>{
        if(newObj.hasOwnProperty(res))
        {
            newObj[res] = newObj[res]+1;
        }
        else
        {
            newObj[res] = 1;
        }
    })
    return newObj; 
    
}
let arr1 =[2, 3, 2, 4, 5, 2, 6, 4];
let result = Occurence(arr);
console.log(result);