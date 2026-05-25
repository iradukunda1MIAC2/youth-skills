// login.js

document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
    }
    else{
        alert("Login Successful!");

        // later you can redirect
        // window.location.href = "dashboard.html";
    }

});