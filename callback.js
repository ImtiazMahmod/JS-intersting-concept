//callback function
function add(a,b){
    const sum = a+b;
    console.log(sum);
}

function showAdd(name,sum){
    sum(5,6);
}
function getAdd(name,sum){///callback function
    sum(10,12);
}

showAdd('sum of values',add)///pass function as parameter ==callback function
getAdd('get sum of values',add)