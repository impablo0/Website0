document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("login-signup-Modal");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    loginBtn.addEventListener("click", function() {
        modal.style.display = "block";
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupForm").style.display = "none";
    });

    signupBtn.addEventListener("click", function() {
        modal.style.display = "block";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupForm").style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});