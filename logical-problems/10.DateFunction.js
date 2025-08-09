Date.prototype.lastYear = function(){
    console.log(this);
    return this.getFullYear() - 1;
}
console.log(new Date('1994-10-10').lastYear());


// Using map
const result = [1,2,3,4,5].map(x => x*2);
console.log(result);     //[ 2, 4, 6, 8, 10 ]

//--------------------------------------------------------------------------------------------
// Using map with arrow function
//--------------------------------------------------------------------------------------------

Array.prototype.map = function()
{
    let arr =[];
    for(let i = 0; i < this.length; i++ )
    {
     arr.push(this[i] +'*')   ;
    }
    return arr;
}
const result1 = [1,2,3,4,5].map(x => x*2);
console.log(result);