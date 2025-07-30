// Pattern printring tyep2
//1
//12
//123
//1234
function Patternprint(row)
{
   for(let i=1; i<=row ;i++)
   {
       
       for(let j = 1 ;j< i ;j++)
       {   
           document.write(j)            
       }
       document.write("</br>")       
   }   
}
Patternprint(5)


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20 21

function pattern(n){
    // defining an empty string
    let string = "";
    let num =1;
    for(let i = 0; i <= n; i++) { // external loop
     for(let j = 0; j <= i; j++) { // internal loop
        // string += "*";
        string += " ";
        string += num
        num++;
        
     }   
      // newline after each row
      string +="</br>"
    }
    // printing the string
    
    document.write(string);
    }
    pattern(5);