// Write a function to reverse a string.
function reverseString(str)
{
     let reversestr ="";
    for(let i = str.length-1;i>=0;i--)
    {
        reversestr +=str[i];
    }
    return reversestr;
}
str="Shital"
result = reverseString(str);
console.log(result); //latihS


// reverse string using javaScript methods
console.log(reverseString(value))

function reverseStringUsingmethods(value)
{
    return value.split("").reverse().join()

}
reverseStringUsingmethods(value)
