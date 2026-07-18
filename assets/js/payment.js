/* ==========================================================================
   PAYMENT LOGIC (Merged from choose-bank, credit-card, and payment-successful)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {

    /* ==========================================
       1. CHOOSE BANK PAGE LOGIC
       ========================================== */
    const couponToggle = document.getElementById("couponToggle");
    const couponInputArea = document.getElementById("couponInputArea");
    
    if (couponToggle && couponInputArea) {
        const toggleIcon = couponToggle.querySelector(".toggle-icon");
        couponToggle.addEventListener("click", function() {
            // Toggle the active class to show/hide the input area
            couponInputArea.classList.toggle("active");
            
            // Rotate the chevron icon
            if (toggleIcon) {
                if (couponInputArea.classList.contains("active")) {
                    toggleIcon.style.transform = "rotate(180deg)";
                } else {
                    toggleIcon.style.transform = "rotate(0deg)";
                }
            }
        });
    }

    const applyPromoBtn = document.getElementById("applyPromo");
    const promoCodeInput = document.getElementById("promoCode");

    if (applyPromoBtn && promoCodeInput) {
        applyPromoBtn.addEventListener("click", function() {
            const code = promoCodeInput.value.trim();
            if (code === "") {
                alert("Please enter a promo code before applying.");
            } else {
                alert(`Checking promo code: ${code}...`);
            }
        });
    }

    // Highlight Selected Payment Row (Optional UX)
    const paymentRows = document.querySelectorAll(".payment-method-row");
    const radios = document.querySelectorAll("input[name='payment_method']");

    function updateRowStyles() {
        radios.forEach((radio, index) => {
            if (paymentRows[index]) {
                if (radio.checked) {
                    paymentRows[index].style.opacity = "1";
                    setTimeout(() => {
                        if (radio.value === "card") {
                            window.location.href = "credit-card.html";
                        } else if (radio.value === "aba") {
                            window.location.href = "aba-payment.html";
                        }
                    }, 500);
                } else {
                    paymentRows[index].style.opacity = "0.7";
                }
            }
        });
    }

    // Listen for radio button changes
    if (radios.length > 0) {
        radios.forEach(radio => {
            radio.addEventListener("change", updateRowStyles);
        });
    }


    /* ==========================================
       2. CREDIT CARD PAGE LOGIC
       ========================================== */
    const cardNumber = document.getElementById("cardNumber");
    const cardExpiry = document.getElementById("cardExpiry");
    const paymentForm = document.getElementById("paymentForm");

    // Format Card Number (Add space every 4 digits)
    if (cardNumber) {
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
    }

    // Format Expiry Date (Add slash MM/YY)
    if (cardExpiry) {
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
    }

    // Form Submission
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent page reload
            
            const cardCvvEl = document.getElementById("cardCvv");
            const cvv = cardCvvEl ? cardCvvEl.value : "";
            
            // Basic validation check
            if (!cardNumber || cardNumber.value.length < 19 || 
                !cardExpiry || cardExpiry.value.length < 5 || 
                cvv.length < 3) {
                alert("Please fill in all card details correctly.");
                return;
            }

            // Simulate processing
            const btn = paymentForm.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.innerText;
                btn.innerText = "Processing...";
                btn.disabled = true;

                setTimeout(() => {
                    alert("Payment Confirmed Successfully!");
                    btn.innerText = originalText;
                    btn.disabled = false;
                    // Redirect to payment-successful.html
                    window.location.href = "payment-successful.html";
                }, 1500);
            }
        });
    }


    /* ==========================================
       3. PAYMENT SUCCESSFUL PAGE LOGIC
       ========================================== */
    const confettiLayer = document.getElementById("confettiLayer");
    const homeBtn = document.getElementById("homeBtn");

    // Transition: Fade out confetti and fade in the home button
    if (confettiLayer || homeBtn) {
        setTimeout(() => {
            // Fade out the background
            if (confettiLayer) {
                confettiLayer.classList.add("fade-out");
            }
            
            // Fade in the button
            if (homeBtn) {
                homeBtn.classList.remove("hidden-btn");
                homeBtn.classList.add("fade-in");
            }
        }, 2500);
    }

    // Button Click Redirect Logic
    if (homeBtn) {
        homeBtn.addEventListener("click", function() {
            const originalText = this.innerText;
            this.innerText = "Redirecting...";
            
            setTimeout(() => {
                window.location.href = "../index.html"; 
            }, 400);
        });
    }

});
