

// var str = document.getElementById('para').innerHTML;
// var arr = document.getElementById('para').innerHTML = Array.from(str);

// var para = document.getElementById('para').value;
// var len = new Array ("1","2","3","4","5","6","7","8")
// console.log(len.length)
// for (let i = 0; i<arr.length; i++) {

//     if(i.length>len.length){

//         i

//     }

// }
// function highLight() {
//     const txt = document.getElementById('para').innerText;
//     const arr = []
//     let words = txt.split(" ");
//     let size = 8;
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length >= 8) {
//             var cost =`<span style="background-color:yellow">${word}</span>`
//             // console.log(cost)
//             // arr.push(cost)
        

//         }
//         // arr.push(word)
//         // console.log(cost)
//         // cost.join(' ')

//         // txt.innerHTML = cost
    
//     }
//     // arr.join(' ')
//     // console.log(arr);
    
// }





function highLight(){
    const para = document.querySelector('p');
    const changed = para.innerText.split(' ').map(word => word.length >8 ? `<span style="background-color:yellow">${word}</span>` :word).join(' ');
    console.log(changed);

    para.innerHTML = changed;




}