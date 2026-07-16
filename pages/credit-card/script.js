document.addEventListener("DOMContentLoaded", function() {

    const cardNumber = document.getElementById("cardNumber");
    const cardExpiry = document.getElementById("cardExpiry");
    const paymentForm = document.getElementById("paymentForm");

    // 1. Format Card Number (Add space every 4 digits)
    cardNumber.addEventListener("input", function(e) {
        // Remove all non-digit characters
        let value = e.target.value.replace(/\D/g, "");
        
        // Add space after every 4 digits
        let formattedValue = "";
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += " ";
            }
            formattedValue += value[i];
        }
        
        e.target.value = formattedValue;
    });

    // 2. Format Expiry Date (Add slash MM/YY)
    cardExpiry.addEventListener("input", function(e) {
        // Remove non-digit characters
        let value = e.target.value.replace(/\D/g, "");
        
        // Automatically add slash after 2nd digit
        if (value.length >= 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        
        e.target.value = value;
    });

    // Handle backspace gracefully for Expiry
    cardExpiry.addEventListener("keydown", function(e) {
        if (e.key === "Backspace" && e.target.value.length === 3) {
            e.target.value = e.target.value.substring(0, 2);
        }
    });

    // 3. Form Submission
    paymentForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent page reload
        
        const cvv = document.getElementById("cardCvv").value;
        
        // Basic validation check
        if (cardNumber.value.length < 19 || cardExpiry.value.length < 5 || cvv.length < 3) {
            alert("Please fill in all card details correctly.");
            return;
        }

        // Simulate processing
        const btn = paymentForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = "Processing...";
        btn.disabled = true;

        setTimeout(() => {
            alert("Payment Confirmed Successfully!");
            btn.innerText = originalText;
            btn.disabled = false;
            // window.location.href = "success.html"; // Redirect in real app
        }, 1500);
    });

});