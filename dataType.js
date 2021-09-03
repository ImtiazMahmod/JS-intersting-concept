///data types
/* 
primitive
    Number
    String
    Boolean
    null
    undefined
    Symbol

Nonprimitive
    Object    
*/
//primitive
let a = 50;
let b = a;
// console.log(a,b);
a = 60;
// console.log(a,b);

//non primitive
let obj = {name:'abu'};
let obj1  = obj;
console.log(obj,obj1);
obj.name  = "bakar";
console.log(obj,obj1);