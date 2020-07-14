var name = 'zfpx',age = 8;
function desc(strings,...values){
    console.log(strings,values);
}
desc`${name} is ${age} old!`;
