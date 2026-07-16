/* ===========================================
   TOV OT BOOKING PAGE
=========================================== */

const bookingForm = document.getElementById("bookingForm");
const continueBtn = document.getElementById("continueBtn");
const applyPromo = document.getElementById("applyPromo");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const promoCode = document.getElementById("promoCode");

/* ===========================================
   EMAIL VALIDATION
=========================================== */
function validateEmail(emailValue){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(emailValue);
}

/* ===========================================
   PHONE VALIDATION
=========================================== */
function validatePhone(phoneValue){
    const pattern = /^[0-9]{8,15}$/;
    return pattern.test(phoneValue);
}

/* ===========================================
   CONTINUE BOOKING
=========================================== */
continueBtn.addEventListener("click", function(){

    if(firstName.value.trim()===""){
        alert("Please enter your first name.");
        firstName.focus();
        return;
    }

    if(lastName.value.trim()===""){
        alert("Please enter your last name.");
        lastName.focus();
        return;
    }

    if(email.value.trim()===""){
        alert("Please enter your email.");
        email.focus();
        return;
    }

    if(!validateEmail(email.value)){
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    if(phone.value.trim()===""){
        alert("Please enter your phone number.");
        phone.focus();
        return;
    }

    if(!validatePhone(phone.value)){
        alert("Phone number must contain only numbers (8–15 digits).");
        phone.focus();
        return;
    }

    alert("Booking information completed successfully!");
    // Redirect to payment page
    window.location.href = "choose-bank.html";
});

/* ===========================================
   PROMO CODE
=========================================== */
applyPromo.addEventListener("click", function(){
    const code = promoCode.value.trim().toUpperCase();

    if(code===""){
        alert("Please enter a promo code.");
        return;
    }

    switch(code){
        case "TOVOT10":
            alert("Promo code applied!\n10% discount has been added.");
            break;
        case "WELCOME":
            alert("Welcome! Promo code accepted.");
            break;
        case "KOHKONG":
            alert("Special Koh Kong promotion applied.");
            break;
        default:
            alert("Invalid promo code.");
    }
});

/* ===========================================
   INPUT FOCUS EFFECT
=========================================== */
const inputs = document.querySelectorAll("input, select");

inputs.forEach(function(input){
    input.addEventListener("focus",function(){
        this.style.borderColor="#4285F4";
    });
    input.addEventListener("blur",function(){
        this.style.borderColor="#d9d9d9";
    });
});

/* ===========================================
   PREVENT DEFAULT FORM SUBMIT
=========================================== */
bookingForm.addEventListener("submit",function(e){
    e.preventDefault();
});