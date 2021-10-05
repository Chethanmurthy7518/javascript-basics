//for methods
var numbers = [10,30,40]
numbers.forEach (function(value,index) {
    console.log(`value at -${index} -${value}`);
})
console.log('..............................................................');
numbers.forEach ((value,index) => {
    console.log(`value at -${index} -${value}`);
})
console.log('..........................................................');
numbers.forEach ((value,index) => console.log(`value at -${index} -${value}`));

console.log('...........................................................');
var animals = ['Tiger','Lion','Elephant','Panda','Cat']
animals.forEach((value,index)=>console.log(`value at -${index} -${value}`));
console.log('...............................................................');
//isArray methods
var isNumberArray = Array.isArray(numbers)
console.log(`numbers is array ${ isNumberArray}`);

var person = {
    name : 'chandan',

}
var isPersonArray = Array.isArray(person)
console.log(`person is array -${isPersonArray}`);

//push methods
var newLength = numbers.push(90,100,110)
console.log(`new length after push - ${newLength}`);
console.log(`numbers data after push - ${numbers}`);

var type


//pop

var removedElement = numbers.pop()
console.log(`Removed element -${removedElement}`);
console.log(`numbers data after pop-${numbers}`);


//includes method
const hasThirty = numbers.includes(30)
console.log(`Has thirty - ${hasThirty}`);

const hasElement  = numbers.includes(5000)
console.log(`Has Element - ${hasElement}`);

const hasTwenty = numbers.includes(40,2)
console.log(`Has twenty - ${hasTwenty}`);

console.log('..............');
//splice

const n = [40,50,60,100]
console.log(`n  before splice - ${n}`);
const deletedElements = n.splice(0,1,100)
console.log(`n after splice - ${n}`);
console.log(`deletedElements-${deletedElements}`);

console.log('..................');
const n1 = [20,40,50,60]
console.log(`n1  before splice - ${n1}`);
const removeElements = n1.splice(2,2,70,100)
console.log(`n1 after splice - ${n1}`);
console.log(`removeElements - ${removeElements}`);

console.log('....................');
//Slice methods

const n2 = [10,20,30]
console.log(`n2  before slice - ${n2}`);
const elements = n2.slice(1,2)
console.log(`n2 after slice - ${n2}`);
console.log(`elements - ${elements}`);
 n2.unshift(2,3)
 console.log(n2);

 //shift method
 let n3=[1,3,5,7,12]
let n4=[2,4,6,8,10]

n3.shift();
console.log(n3);

n4.shift();
console.log(n4);

console.log('.............unshift............');
n3.unshift(22,24)
console.log(n3);

n4.unshift(36,39)
console.log(n4);

//index of methods
const s = [10,20,30]
if (s.indexOf(30) != -1)
{
          console.log('Its is present');
}
else 
{
    console.log('not present');
}


console.log('..............');
const y = [10,20,30]
const numbersWithHifen = y.join('-')
console.log(`numbersWithHifen  ${numbersWithHifen}`);

// map methos

const nums  = [100,200,300]
const numsAfterAddingTenusingArrowsingleline  = nums.map(val => val+10);
console.log(`numsAfterAddingTenusingArrowsingleline - ${numsAfterAddingTenusingArrowsingleline}`);
console.log('........................');

//filter method
const number = [100,200,300]


const numIsGreaterThan150usingArrowSingleline = number.filter(val=>(val>150))
console.log(`numIsGreaterThan150usingArrowSingleline - ${numIsGreaterThan150usingArrowSingleline}`);

console.log('..................................');








