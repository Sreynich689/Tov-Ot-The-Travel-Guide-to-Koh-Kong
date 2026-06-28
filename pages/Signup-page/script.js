const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(icon => {

    icon.addEventListener("click", () => {

        const input = icon.previousElementSibling;

        if(input.type === "password"){

            input.type = "text";

            icon.classList.remove("bi-eye");

            icon.classList.add("bi-eye-slash");

        }else{

            input.type = "password";

            icon.classList.remove("bi-eye-slash");

            icon.classList.add("bi-eye");

        }

    });

});


document.getElementById("signupForm").addEventListener("submit",function(e){

    e.preventDefault();

    const password=document.getElementById("password").value;

    const confirm=document.getElementById("confirmPassword").value;

    if(password!==confirm){

        alert("Passwords do not match!");

        return;

    }

    alert("Account Created Successfully!");

});