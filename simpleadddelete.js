function inser_name(){
    var fname = document.getElementById("fname").value;
    var tabel = document.getElementsByTagName("table")[0];
    var newRow = tabel.insertRow();
    var cell = newRow.insertCell();
    cell.innerHTML = fname;



}