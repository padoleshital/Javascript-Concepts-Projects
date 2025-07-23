KKJLL;;2234567890-// Write a program to check whether the given number is prime or not.


function isPrime(num)
{
    if(num<=1)
     
    false;
    
    if(num<=3)
    true;
    
    if(num % 2 === 0 || num % 3 === 0)
    {
    return false;
    }
    else
    {
       // for(let i = 5; i * i <= num; i += 6)
       return true;
    }
  }
console.log(isPrime(7))//true

