document.addEventListener("DOMContentLoaded", function() {

    // 1. Coupon Toggle Logic
    const couponToggle = document.getElementById("couponToggle");
    const couponInputArea = document.getElementById("couponInputArea");
    const toggleIcon = couponToggle.querySelector(".toggle-icon");

    if(couponToggle) {
        couponToggle.addEventListener("click", function() {
            // Toggle the active class to show/hide the input area
            couponInputArea.classList.toggle("active");
            
            // Rotate the chevron icon
            if (couponInputArea.classList.contains("active")) {
                toggleIcon.style.transform = "rotate(180deg)";
            } else {
                toggleIcon.style.transform = "rotate(0deg)";
            }
        });
    }

    // 2. Promo Code Apply Button
    const applyPromoBtn = document.getElementById("applyPromo");
    const promoCodeInput = document.getElementById("promoCode");

    if(applyPromoBtn) {
        applyPromoBtn.addEventListener("click", function() {
            const code = promoCodeInput.value.trim();
            if (code === "") {
                alert("Please enter a promo code before applying.");
            } else {
                alert(`Checking promo code: ${code}...`);
            }
        });
    }

    // 3. Highlight Selected Payment Row (Optional UX)
    const paymentRows = document.querySelectorAll(".payment-method-row");
    const radios = document.querySelectorAll("input[name='payment_method']");

    function updateRowStyles() {
        radios.forEach((radio, index) => {
            if (radio.checked) {
                paymentRows[index].style.opacity = "1";
            } else {
                paymentRows[index].style.opacity = "0.7";
            }
        });
    }

    // Listen for radio button changes
    if (radios.length > 0) {
        // Uncomment the line below if you want one selected by default on load
        // updateRowStyles(); 
        radios.forEach(radio => {
            radio.addEventListener("change", updateRowStyles);
        });
    }
});