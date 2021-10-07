// console.log("json staring");

async function fetchPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const data = await response.json()
    console.log('data',data)

    console.log('HELLO')
}


fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json() ).then(d => {
    document.getElementById("id").innerHTML = d.id
    document.getElementById("username").innerHTML = d.userid
    document.getElementById("title").innerHTML = d.title
    document.getElementById("completed").innerHTML = d.completed
})

// function myfun(){
//     document.getElementById("myform").submit();
//     return false
// }

// var id = document.getElementById("id").innerText.value
// console.log(id)


function myfun(){
    // var id = document.getElementById("id").value;
    // var userid = document.getElementById("userid").value;
    // var title  = document.getElementById("title").value;
    // var completed = document.getElementById("completed").value;
    // console.log(id,userid,title,completed)
    let data = {
        ID:document.getElementById("id").value,
        UserId: document.getElementById("userid").value,
        Title:document.getElementById("title").value,
        Completed:document.getElementById("completed").value

    }
    console.log(data.ID)
    document.getElementById("id").innerHTML = data.ID
    document.getElementById("username").innerHTML = data.UserId
    document.getElementById("title").innerHTML = data.Title
    document.getElementById("completed").innerHTML = data.Completed



    return false;
}