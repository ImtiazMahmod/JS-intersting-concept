const x = 10;                       ///global scope
function add(a,b){                  ///local scope
    console.log(h);                 ///hoisting
    const sum = a+b + x;
    if(sum>10){
        const messege = 'hi';        //block scope
        console.log(messege);   
        var h = 'hoising';
        console.log(h);
        leak = 'global leaking';
    }
    return sum;    
}
console.log(add(5,6));
console.log(leak);                   ///global leaking