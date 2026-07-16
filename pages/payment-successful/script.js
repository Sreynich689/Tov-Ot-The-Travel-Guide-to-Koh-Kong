document.addEventListener("DOMContentLoaded", function() {

    const confettiLayer = document.getElementById("confettiLayer");
    const homeBtn = document.getElementById("homeBtn");

    // 1. Animation Logic: Transition from Picture 1 to Picture 2
    // Wait 2.5 seconds, then fade out confetti and fade in the button
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

    }, 2500); // 2500 milliseconds = 2.5 seconds


    // 2. Button Click Redirect Logic
    if (homeBtn) {
        homeBtn.addEventListener("click", function() {
            // Adds a small visual feedback update before redirecting
            const originalText = this.innerText;
            this.innerText = "Redirecting...";
            
            setTimeout(() => {
                // Redirects back to the home page based on your project structure
                // Adjust this path to point exactly to your homepage file!
                window.location.href = "../../index.html"; 
            }, 400);
        });
    }

});