function patternLeft(n)
{
    let string ="";
    for(let i=1;i<= n ;i++)
    {
        for(let j=0;j< n-i;j++)
        {
            string +=" "
        }
        for(let k=0 ; k<i;k++)
        {
            string +="*"
        }
        string +="\n";      
    }
    return string;
   
}
console.log(patternLeft(5));

//    *
//   **
//  ***
// ****
//*****