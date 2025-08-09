//check if a string is palindrom or not
function isPalindrom(str)
{
    let j = str.length - 1;
    for(let i = 0 ; i < j/2 ; i++)
    {
        if(str[i] != str[j-i])
        {
         return false;   
        }
    }
    return true;
}

//Approch 1

function checkPalindrom(str){
    let ans = isPalindrom(str)
    if(ans == true)
    {
        console.log("String is palindrom");
    }
    else
    {
        console.log("string is not palindrom");
    }
}
let test ="shital"


console.log(isPalindrom(test))
console.log(checkPalindrom(test))

//Approch 2 using methods
function isPalindrom(str)
{
    let rev = "";
    rev = str.split('').reverse().join('')
    
    if(rev === str)
    {
        return true;
    }
    else
    {
        return false;
    }
}
const str="race";
const str1 ="nitin";
let result = isPalindrom(str1) 
console.log(result); // true