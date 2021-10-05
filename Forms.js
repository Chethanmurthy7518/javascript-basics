function detailsValidation() {

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var contactnumber = document.getElementById('contactnumber').value;
    var password = document.getElementById('password').value;
    console.log(username, email, contactnumber, password);


    if (username == "" || username == null) {
        var userErrorMessage = document.getElementById('userErrorMessage');
        userErrorMessage.innerHTML = "User Name required"
        userErrorMessage.className = "text-danger"
        return false;
    }
    if (email == "" || email == null) {
        var emailErrorMessage = document.getElementById('emailErrorMessage');
        emailErrorMessage.innerHTML = "Email required";
        emailErrorMessage.className = "text-danger"

        return false;
    }
    if (contactnumber == "" || contactnumber == null) {
        var contactErrorMessage = document.getElementById('contactErrorMessage');
        contactErrorMessage.innerHTML = "Contact Number required"
        contactErrorMessage.className = "text-danger"

        return false;
    }
    if (password == "" || password == null) {
        var passwordErrorMessage = document.getElementById('passwordErrorMessage');
        passwordErrorMessage.innerHTML = "Password Must be given"
        passwordErrorMessage.className = "text-danger";
        return false;
    }


    return false;



}


// let car ={
//     Name: "AUDi",
//     Color:"White",
//     Model:2021,

// }

// let jsonObj = JSON.stringify(car);
// console.log(jsonObj)

// let obj= JSON.parse(jsonObj)
// console.log(obj)

// var str = "Chetha Murthy"
// console.log(str)
// let jsonStr= JSON.stringify(str)
// console.log(jsonStr)

// let stro = JSON.parse(jsonStr)
// console.log(stro)

// function closureFunc(){
//     var userName = "Chethan";
//     function dispalayName(){
//         alert(userName)
//     }
//     return dispalayName
// }

// let fun = closureFunc()

// fun()


// function add(a,b){
//     // return a+b;
//     console.log(a+b)
// }
// function callBackFun(a,b,callback){
//     callback(a,b);
// }

// callBackFun(3,4,add)


// function person(name,age=24,qualification,place="bangalore",...rest){
//     this.name=name;
//     this.age=age;
//     this.qualification=qualification;
//     this.place=place;
//     this.rest=rest;
// }
// let person1 = new person('allu arjun',34,'btech','bangalore','a','b','c');
// console.log(person1);

// var numbers = [1,2,3,4,5];
// var numbers2 = [6,7,8,9,10];

// var total = [...numbers,...numbers2]
// console.log(total)


let car = {
    Name: "AUDi",
    Color: "White",
    Model: 2021,
    description:{
        brakes: "abs",
        steering:"String"
    }

}
// let car2= {
//    torque:"300n-m"

// }
// console.log(car)

// let a = {...car,...car2}
// console.log(a)

const {Name,Color,Model,description:{brakes,steering}}=car;
console.log(Name,Color,Model,brakes,steering)

var numbers = [1,2,3,4,5]
let [a,b,c,d,e] = numbers;
console.log(a,b,c,d,e)

