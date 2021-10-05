

function add(n1,n2){
    var sum =n1 + n2
    return sum
}

var result = add(10,20)
console.log(`Result - ${result}`);
console.log('..............Anonymus function..........');
var subtract =function (n1,n2){

    return n1-n2
}
var res = subtract(20,10)
console.log(`Res - ${res}`);

console.log('.....IIFE function......');
(function(n1,n2){
    var product =n1*n2
    console.log(`Product - ${product}`);
})(10,20)
console.log('...........Arrow function.....');
var divide = (n1,n2)=>n1/n2
var d = divide(20,10)
console.log(`Value - ${d}`);
console.log('............');


function add(n1,n2){
    var sum =n1 + n2
    return sum
}

var result = add(50,60)
console.log(`Result - ${result}`);
console.log('..............Anonymus function..........');
var subtract =function (n1,n2){

    return n1-n2
}
var res = subtract(90,70)
console.log(`Res - ${res}`);

console.log('.....IIFE function......');
(function(n1,n2){
    var product =n1*n2
    console.log(`Product - ${product}`);
})(30,40)
console.log('...........Arrow function.....');
var divide = (n1,n2)=>n1/n2
var d = divide(80,10)
console.log(`Value - ${d}`);
console.log('............');