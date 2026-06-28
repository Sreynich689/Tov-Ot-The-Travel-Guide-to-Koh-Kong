const toggle = document.getElementById("togglePassword");

const password = document.getElementById("password");

toggle.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        toggle.classList.replace("bi-eye","bi-eye-slash");

    }else{

        password.type="password";

        toggle.classList.replace("bi-eye-slash","bi-eye");
    }

});

document.getElementById("loginForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Login Successful!");

});