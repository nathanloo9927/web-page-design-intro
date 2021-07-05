function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    if (username == "guestuser" && password == "Pa$$word123") {
        window.location = "next.html";
    } else {
        alert("Username and/or password incorrect");
    }
}