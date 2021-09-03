/// undefined occurs when not assign value to variable systematically
/*  explicitely declare undefined
    not assign value to variable directly
    not write return 
    write only return but not return value from function
    not pass parameter to function
    deleted array index 
    property not exist in object
    accessing out of range array element 
*/

//null always explicitely declared when not assign any value to variable but next will set 

/* function Return(a,b){
    let sum = a+b;
    return ;
}
console.log(Return(5,6)); */

const obj = {name: 'abu'};
// console.log(obj.job);

const arr = [56,59,69];
// console.log(arr[3]);
delete arr[2];
// console.log(arr[2]);