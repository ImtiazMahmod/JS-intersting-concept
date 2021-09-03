//truthy value and falsy value
// falsy value
    /*  false
        0
        '' -empty string
        null
        undefined
        NaN
    */
// truthy value
    /* true
        any number positive or negative
        any string including '0' 'false'
        []
        {}
    */

let x = NaN;
if(x){
    console.log('truthy');
}
else{
    console.log('falsy');
}

