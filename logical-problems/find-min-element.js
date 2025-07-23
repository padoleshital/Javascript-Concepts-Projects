function min_Element(arr)
{
    let min = arr[0];
    for(let i= 1;i<arr.length;i++)
    {
        if(arr[i]< min)
        {
            min = arr[i]
        }
    }
    return min;
    
}
let arr = [10,20,40,5];
console.log(min_Element(arr));


// Alternative using Math.min
function min_Element(arr){
    return Math.min(...arr); //5
}