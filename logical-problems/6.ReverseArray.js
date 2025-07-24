//Write a function to reverse a string.


function reverse(arr)
{ 
    let reverseArr =[]
    for(let i = arr.length-1; i>=0;i--)
    {
        
            reverseArr.push(arr[i]);
        
    }
    return reverseArr;
   
}
arr = [1,24,2,3,4,5];
result = reverse(arr); 
console.log(result); // [5, 4, 3, 2, 24, 1]

