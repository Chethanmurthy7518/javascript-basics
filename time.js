function ti() {
    var date = new Date();
    // console.log(date.toLocaleTimeString())
    // var time =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    // if(date.getHours()>12){
    //     var session= "PM"
    //     console.log(session)
    // }
    // var time = date.toLocaleTimeString()

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (hour >= 12) {
        var session = "PM";
    }
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    document.getElementById("tim").innerHTML=hour + ":" + min + ":" + sec + ":" + session;
    setInterval(ti, 500);
}


