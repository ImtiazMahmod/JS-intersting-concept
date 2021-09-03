/// function closures 
//It makes it possible for a function to have "private" variables.
const add = ()=> {
    let counter = 0;
   return sum = ()=>{///closures
        counter +=1;
        return counter;
    }
   
}

const getAdd = add()
console.log(getAdd);///get a function
console.log(getAdd());
console.log(getAdd());
