///non strict equal== and strict equal ===
//1 or '1' and true
//0 or '0' and false
//to check convert implicitly in non strict equal

const a = '1';
const b = true;
if(a==b){
    console.log('true');
}
else{
    console.log('false');
}