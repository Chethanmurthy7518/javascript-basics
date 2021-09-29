var val=0

document.getElementById("count").innerText=val;

function increment(){
    val = val+ 1;

    document.getElementById("count").innerText=val;
}
function decrement(){

    val = val- 1;

    document.getElementById("count").innerText=val;

}
function reset(){

    val=0;

    document.getElementById('count').innerText=val;
}