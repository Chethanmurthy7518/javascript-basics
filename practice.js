// // var employee = {
// //     Name:"Chethan",
// //     Age:26,
// //     Designation:"software Developer",
// //     skills:["HTML","CSS","JavaScript"],
// //     role:function(){
// //         return "He Develops the Front End";
// //     },
// //     address:{
// //         street:"1st Cross",
// //         locality: "BSK ",
// //         PINCODE:562110,
// //     }
// // }
// // console.log(employee.role())
// // console.log(employee.skills)
// // console.log(employee.address)

// // console.log(Object.keys(employee))
// // console.log(Object.keys(employee.address))

// // console.log(Object.values(employee))
// // console.log(Object.values(employee.address))


// // var person1 = {
// //     Name:"Chethan",
// //     Qualification:"BE",
// //     Age :26,
// //     Adress:"oefwhn"

// // }

// // var person2 = {
// //     Name:"Bylappa",
// //     Qualification:"BE",
// //     Age :25,
    
// // }

// // console.log(Object.assign(person1,person2));

// // console.log(Object.entries(person1))


// let person= ['Person A','Person B','Person C','Person D'];
// console.log(person)

// console.log(person.join(', '))

// console.log(person.pop())
// console.log(person.push('Person E'))

// console.log(person[0])

// console.log(person.length)

// console.log(person)

// console.log(person.splice(2,0,"Person 1"))
// console.log(person)


// console.log(person.slice(1))
// console.log(person.slice(2))

// console.log(person.sort())
// console.log(person.reverse())


// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(txt.length)



// let str = "Apple, Banana, Kiwi";
// console.log(str.slice(7, 13) )


// let str = "Apple, Banana, Kiwi";
// console.log(str.slice(-12, -6) )

// // -----------------substring cannot accept negative values otherthan that it is same as slice-----------------------------
// let str = "Apple, Banana, Kiwi";
// console.log(substring(7, 13))


// let str = "Apple, Banana, Kiwi";
// console.log(str.substr(7, 6)) 


// let str = "Apple, Banana, Kiwi";
// console.log(str.substr(-4))


// // ------the replace() method is case sensitive.-----------
// let val = "Chethan is going";
// console.log(val.replace("going", "gone"))



// // ----------To replace case insensitive, use a regular expression with an /i flag (insensitive):-----
// let val = "Chethan is GOING going"
// console.log(val.replace(/GOING/i , "gone"))


// let val = "chethan";
// console.log(val.toUpperCase())


// let val = "CHETHAN";
// console.log(val.toLowerCase())



// let val1 = "Something";
// let val2 = "Nothing";
// console.log(val1.concat(val2))

// let val = "     Chethan       ";
// console.log(val.trim( ))


// let val = "CHETHAN";
// console.log(val.charAt(1))


// let val = "CHETHAN";
// console.log(val.charCodeAt(3))

// // -------Access properties------

// let val = "CHETHAN"
// console.log(val[0])



// let val = "abcdefghijklmnopqrstuvwxyz";
// console.log(val.split(","))
// console.log(val.split(" "))
// console.log(val.split("&"))













// var arr = [1,2,3,4,5,6,7,8,9,10]
// var even=[];
// var odd=[];
// arr.map(val => val%2 == 0 ? even.push(val): odd.push(val))
// console.log(even)
// console.log(odd)

// if(val%2 == 0){
//     var even = val;
//     console.log(even);

// }
// else
// {
//     var odd= val;
//     console.log(odd);
// }

var arr = [1,2,3,4,5,6,7,8,9]

let largest = Math.max(...arr)
// console.log(largest)
arr.splice(arr.indexOf(largest),1);
var seclargest = Math.max(...arr);
console.log(seclargest)
