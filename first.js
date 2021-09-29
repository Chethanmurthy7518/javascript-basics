function add(){
    var num1 = parseInt(prompt("Enter the first number"));
    var num2 = parseInt(prompt("Enter the second number"));
    var num3 =   num2++
    console.log('wefjwoefjjew');
    console.log(num3,"ok");

    document.getElementById("addDiv").innerHTML=`Added num1 and num2 is ${num1+num2}`


    
}

function sub(){
    var num3 = parseInt(prompt("Enter the first number to subtract"));
    var num4 = parseInt(prompt("Enter the Second number to subtract"));

    document.getElementById("subDiv").innerHTML=`Substracted num3 and num4 is  ${num3-num4}`
    
}

function mul(){
    var num5 = parseInt(prompt("Enter the first number to multiply"));
    var num6 = parseInt(prompt("Enter the Second number to multiply"));

    document.getElementById("mulDiv").innerHTML=`Multiplied num5 and num6 is ${num5*num6}`
    
}

function div(){

    var num7 = parseInt(prompt("enter the First number to divide"));
    var num8 = parseInt(prompt("enter the second number to divide"));

    document.getElementById("divDiv").innerHTML=`Divided by num7 and num8 is ${num7/num8}`
}