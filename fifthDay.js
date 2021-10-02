// let myDiv = document.getElementById("div")

// for(i=0; i< myDiv.length; i++){
//     myDiv[i].classList.add('mainDiv')
// }


let myDiv = document.querySelectorAll('.myDiv')
console.log(myDiv);

myDiv.forEach(ele=>{
    ele.remove()
})