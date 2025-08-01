//Block scope is like a closet inside the bedroom – even more private!

if(true){

    var a = 2;
    let b = 4;
    const c = 8;
    
}
console.log(a);
//here only a will be visible, because var doesnt have block, function scope
//console.log(b);
//console.log(c);