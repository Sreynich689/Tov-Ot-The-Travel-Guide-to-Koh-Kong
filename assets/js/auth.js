/* ==========================================================================
   AUTHENTICATION LOGIC (Merged from signin, signup, reset, verification)
   ========================================================================== */

// --- 1. Sign In Password Toggle & Form Submit ---
const togglePasswordEl = document.getElementById("togglePassword");
const passwordEl = document.getElementById("password");
const loginFormEl = document.getElementById("loginForm");

if (togglePasswordEl && passwordEl) {
    togglePasswordEl.addEventListener("click", () => {
        if (passwordEl.type === "password") {
            passwordEl.type = "text";
            togglePasswordEl.classList.replace("bi-eye", "bi-eye-slash");
        } else {
            passwordEl.type = "password";
            togglePasswordEl.classList.replace("bi-eye-slash", "bi-eye");
        }
    });
}

if (loginFormEl) {
    loginFormEl.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login Successful!");
    });
}


// --- 2. Sign Up Password Visibility & Match Checking ---
const signupToggles = document.querySelectorAll(".toggle-password");
const signupFormEl = document.getElementById("signupForm");

signupToggles.forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        if (input && input.type === "password") {
            input.type = "text";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        } else if (input) {
            input.type = "password";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        }
    });
});

if (signupFormEl) {
    signupFormEl.addEventListener("submit", function (e) {
        e.preventDefault();
        const pwdInput = document.getElementById("password");
        const confirmInput = document.getElementById("confirmPassword");
        
        if (pwdInput && confirmInput) {
            const passwordValue = pwdInput.value;
            const confirmValue = confirmInput.value;

            if (passwordValue !== confirmValue) {
                alert("Passwords do not match!");
                return;
            }
            alert("Account Created Successfully!");
        }
    });
}


// --- 3. Reset Password Page Toggle Helper ---
function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon  = document.getElementById(iconId);

    if (input && icon) {
        if (input.type === 'text') {
            input.type = 'password';
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        } else {
            input.type = 'text';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    }
}


// --- 4. OTP Verification Input Autocomplete / Autofocus ---
const otpInputs = document.querySelectorAll('.otp-input');
if (otpInputs.length > 0) {
    otpInputs.forEach((input, i) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && i < otpInputs.length - 1) {
                otpInputs[i + 1].focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && i > 0) {
                otpInputs[i - 1].focus();
            }
        });
    });
}
