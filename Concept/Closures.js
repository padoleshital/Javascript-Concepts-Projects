function a()
{
    let grandpa ='grandpa'
    return function b()
    {
        let father ='father';
        return function c()
        {
            let son = 'son';
            let random = 12345; // not referenced, will get garbage collected
            return function d()
            {
                return `closure inherited all the scopes family: ${grandpa} > ${father} > ${son}`;
            }
        }
    }
}
result = a()()()();
// const closure = grandma => mother => daughter => return `${grandma} > ${mother} > ${daughter}`
// console.log(closure);
console.log(result); //closure inherited all the scopes family: grandpa > father > son


// closure with annonymous function using arrow function syntax
const boo = (string) => (name) => (name2) =>
console.log(`${string} ${name} ${name2}`)    
// console.log(boo('hi')('tim')('becca'));


//Encapsulation in JavaScript

const encapsulation = () => {
    let people =[];
    const setName = name => people.push(name);
    const getName = idx => people[idx];
    const rmName = idx => people.splice(idx,1);
    return {
        setName,
        getName,
        rmName
    };
};
const data = encapsulation();
console.log(data.setName('shital')); //1
console.log(data.getName(0)); //shital
console.log(data.rmName(0)); //[ 'shital' ]