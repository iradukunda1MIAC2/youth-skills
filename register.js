// register.js

document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check empty fields
    if(fullname === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Please fill all fields");
        return;
    }

    // Check password match
    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    // Success
    alert("Registration Successful!");

    // Redirect later
    // window.location.href = "login.html";

});