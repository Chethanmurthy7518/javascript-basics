function detailsVaidation() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var password = document.getElementById('password').value;

    console.log(username, email, contactNumber, password);

    if (username == "" || username == null) {
        var userErrorMessage= document.getElementById('userErrorMessage');
        userErrorMessage.innerHTML = "username is required";
        userErrorMessage.className = "text-danger";
        return false
    }
    if (email == "" || email == null) {
      var emailErrorMessage=  document.getElementById('emailErrorMessage');
        emailErrorMessage.innerHTML = "email name is required";
        emailErrorMessage.className = "text-danger";
        return false
    }
    if (contactNumber == "" || contactNumber == null) {
       var contactErrorMessage= document.getElementById('contactErrorMessage');
        contactErrorMessage.innerHTML = "contact name is required";
        contactErrorMessage.className = "text-danger";
        return false
    }
    if (password == "" || password == null) {
      var passwordErrorMessage= document.getElementById('passwordErrorMessage');
        passwordErrorMessage.innerHTML = "password name is required";
        passwordErrorMessage.className = "text-danger";
        return false
    }
    return false;

}