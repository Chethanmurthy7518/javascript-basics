// let car = {
//     name :"creta",
//     color :"white",
//     model :"2021"
// }
// let jsonObj = JSON.stringify(car);
// console.log(jsonObj);


// var Obj = '{"name":"creta","color":"white","model":"2021"}'
// console.log(JSON.parse(Obj));
// console.log('closures');
// function closureFunc(){
//     var username = "javascript";
//     function displayName(){
//         alert(username)
//     }
//     return displayName
// }
// let func = closureFunc();
// func()

// console.log('==========callback======');

// function add (a,b){
// console.log( a+b); 
// }
// function callbackFun (a,b,callback){
//     callback(a,b)
// }
// callbackFun(3,4,add)


// console.log('==========recurison==========');
// function recursionFun(num){
//     var a=num;
//     var b = a-1;
//     if (a>1){
//         console.log(b);
//         recursionFun(b)
//     }
// }
// recursionFun(20)

// console.log('=========defaultparameter=======');
// function person(name,age=24,qualification,place,...rest){
//     this.name = name;
//     this.age  = age ;
//     this.qualification= qualification;
//     this.place = place;
//     this.rest= rest;
// }
// let person1 =new person ('arjun kapoor',34,'bteh','bangalore','a','b','c','d')
// console.log(person1);

let numbers =[1,2,3,4,5];
let numbers1 = [6,7,8,9];
let total = [...numbers,numbers1]
console.log(total);

 let car = {
        name :"creta",
        color :"white",
        model :"2021",
    description:{
        brakes:'abc',
        streering:'power'
    }
}
const {name,color,model,car:{brakes,streering}} = car;
console.log(name,color,model,brakes,streering);
l
