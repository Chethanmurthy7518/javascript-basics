// Strings are immutables
//toUpperCase method
let str = 'good morning'
str = str.toUpperCase()
console.log(`str :-${str}`);


//toLowerCasemethod
str = str.toLowerCase()
console.log(`str :-${str}`);
  
 //charAt method
 const searchCharacter = str.charAt(3);
 const searchCharacter1 = str.charAt(2);
 console.log(`searchCharacter - ${searchCharacter}`);
 console.log(`searchCharacter1 - ${searchCharacter1}`);

//indexof method
const indexof = str.indexOf('d');
const indexof1 = str.indexOf('o');
console.log(`indexof:-`,indexof);
console.log(`indexof1:-`,indexof1);


//concat method
const greet = str.concat(', Good afternoon','welcome')
console.log(`greet :-${greet}`);

//includes method
const inculdesO = str.includes('O')
console.log(`inculdesO  :- ${inculdesO}`);

//replace method
const replaceH = str.replace('g','H')
console.log(`replaceH :- ${replaceH}`);

//replace all method
const replaceAllLs = str.replaceAll('o','l');
const replaceAllLs1 = str.replaceAll('n','m')
console.log(`replaceAllLs  : ${ replaceAllLs}`);
console.log(`replaceAllLs1  : ${ replaceAllLs1}`);

//substr method 
const extractedstring = str.substr(1,3)
console.log(`extractedstring : ${extractedstring}`);

//substring method

const extractedstring1 = str.substring(1,3)
console.log(`extractedstring1 :${extractedstring1}`);

//trim method
const note = '            hello, welcome to TY    '
const noteAfterTrim  = note.trim()
console.log(`noteAfterTrim : ${noteAfterTrim}`);

//trimleft
const noteAfterTrimLeft  = note.trimLeft()
console.log(`const noteAfterTrimLeft : ${noteAfterTrimLeft}`);

//trimright
const noteAfterTrimRight  = note.trimRight()
console.log(`noteAfterTrimRight : ${noteAfterTrimRight}`);


//split
const data = 'hello'
const dataAfterSplit = data.split('')
console.log(`dataAfterSplit : ${dataAfterSplit}`);

//reverse a string
const reverseString = data.split('').reverse().join('')
console.log(`reverseString : ${reverseString}`);

//split
const data = 'good'
const dataAfterSplit = data.split('')
console.log(`dataAfterSplit : ${dataAfterSplit}`);

//reverse a string
const reverseString = data.split('').reverse().join('')
console.log(`reverseString : ${reverseString}`);
