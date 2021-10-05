var fruits = ['Apple','Banana','Orange','Pineapple']
for(var fruit of fruits){
    console.log(`Fruit -  ${fruit}`);
}
console.log(`fruits - ${fruits}`);
console.log('....2nd object of for ofloop..............');

var vegetables = ['Tomato','Onian','Garlic','Turmaric','Potato']
for(var vegetable of vegetables){
    console.log(`Vegetables -  ${vegetables}`);
    
}
console.log("=================================");
console.log('..............1st object for in loop.........');
var carBrands =['BMW','Ferrari','Lamborgini']
for(var index in carBrands){
    console.log(carBrands[index]);
}
console.log('..............2nd object for in loop.........');
var laptopBrands =['Doll','Lenovo','Hp','Asus','Acer']
for(var index in laptopBrands){
    console.log(laptopBrands[index]);
}

console.log(".......................");
var numbers = [10,30,40]
numbers.forEach (function(value,index) {
    console.log(`value at -${index} -${value}`);
})
console.log('.............................');
var animals = ['Tiger','Lion','Elephant','Panda','Cat']
animals.forEach((value,index)=>console.log(`value at -${index} -${value}`));