function tabdelete(){

    var del = document.querySelectorAll('tr');
    var todel = del[del.length - 1]
    todel.remove();




}
function tabadd(){

    // var addtab = document.createElement('table')
    // addtab.appendChild(addtbody)
    // var addtbody = document.createElement('tbody')
    // var addtr = document.createElement('tr')
    // var addtd1 = document.createElement('td ')
    // addtd1.innerHTML = "a"
    
    // var addtd2 = document.createElement('td')
    
    // addtd2.innerHTML= "b"

    // addtr.appendChild(addtd1)
    // addtr.appendChild(addtd2)

    // addtbody.appendChild(addttr)

    // var addtab = document.createElement('table');
    // var addtbody = document.createElement('tbody');

    // addtab.appendChild(addtbody);

    // var addtr = document.createElement('tr');
    // var addtd1 = document.createElement('td');
    // addtd1.innerHTML = "A"
    // addtr.appendChild(addtd1);

    // var addtd2 = document.createElement('td');
    // addtd2.innerHTML = "B";
    // addtr.appendChild(addtd2);


    // // addtbody.appendChild(addtr)





    // var add = document.getElementById("big");
    // add.appendChild(addtr);

console.log(document.getElementById('lname').value);
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var noname = document.getElementById('noname').value;

    var tab = document.getElementById('table').insertRow(3);
    var cell0= tab.insertCell(0);
    var cell1= tab.insertCell(1);
    var cell2 = tab.insertCell(2);
    cell0.innerHTML = noname;
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;





    
    



}