// Write a program fizz at division of 3 , buzz division of 5, fizzbuzz on divison of both 

function fizzbuzz(x,y)
{
   for( let i=x;i<=y;i++)
   {
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("fizzbuzz")
    }
    else if( i % 3 === 0)
    {
        console.log("fizz");
    }
    else if(i%5 === 0)
    {
        console.log("buzz");
    }
    else{
    console.log(i)
    }
   } 

}
fizzbuzz(1,50)

// Output:
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz
// fizz
// 22
// 23
// fizz
// buzz
// 26
// fizz
// 28
// 29
// fizzbuzz
// 31
// 32
// fizz
// 34
// buzz
// fizz
// 37
// 38
// fizz
// buzz
// 41
// fizz
// 43
// 44
// fizzbuzz
// 46
// 47
// fizz
// 49
// buzz