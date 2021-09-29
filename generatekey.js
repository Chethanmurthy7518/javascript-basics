function generate() {

    var date = new Date()

    var shortdate = date.getFullYear();

    var dateInTwoDigit = shortdate.toString().substr(-2);
    // console.log(dateInTwoDigit);

    var txt = "TYC";
    // console.log(txt);

    var mon = date.getMonth();
    // console.log(mon)

    
    switch(mon){

        case 0: var month= "A";
        break;
        case 1: var month= "B";
        break;
        case 2: var month= "C";
        break;
        case 3: var month= "D";
        break;
        case 4:var month= "E";
        break;
        case 5: var month="F";
        break;
        case 6:var month= "G";
        break;
        case 7: var month="H";
        break;
        case 8: var month="I";
        break;
        case 9:var month= "J";
        break;
        case 10:var month= "K";
        break;
        case 11:var month= "L";
        break;

        


    }
    // console.log(month);

    var num=Math.round(Math.random()*100000);

    // console.log(num)

    let key= dateInTwoDigit.concat(txt,month,num);
    console.log(key)

    document.getElementById('genkey').innerText=key;




}