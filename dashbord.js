document.getElementById("logoutBtn").addEventListener("click", function(){

    let answer = confirm("Are you sure you want to logout?");

    if(answer){
        window.location.href = "login.html";
    }

});