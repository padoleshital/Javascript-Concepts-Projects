//Call by Value for variable

var a = 5;
var b = a;
b++;
console.log(a); //5
console.log(b); //6

//Call by reference for object

let obj1 ={name:'yao', password:'123'}
obj2 = obj1;
obj1.password = 'shital';
console.log(obj1)   //{ name: 'yao', password: 'shital' }
console.log(obj2)   //{ name: 'yao', password: 'shital' }



let obj ={a:'b',b:'b', d:{deep:'Inside deep cloning'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}   //make copy of object this is also called shallow copy

obj.c = 5;
let deepCopy = JSON.parse(JSON.stringify(obj))

// var =
 obj.d.deep = 'hahaha';
console.log(obj) //{ a: 'b', b: 'b', d: { deep: 'hahaha' }, c: 5 }
//Shallow copy will also change the value of obj.d.deep
console.log(clone) //{ a: 'b', b: 'b', d: { deep: 'hahaha' } }
// console.log(clone)
console.log(clone2,'Shallowcopy')
console.log(deepCopy,'deepCopy') 