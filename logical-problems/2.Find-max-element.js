
// Find the maximum element in an array

function max_Element(arr)
{
    let max = arr[0];
    for(let i=1; i < arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];                                                          
        }
    }
    return max;
 
    
}
let arr = [10,30,100,5];
console.log(max_Element(arr)); // Output: 100

// Alternative using Math.max
function max_Element(arr){
    return Math.max(...arr);
}
console.log(max_Element(arr)); // Output: 100