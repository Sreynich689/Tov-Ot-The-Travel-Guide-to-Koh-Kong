document.addEventListener("DOMContentLoaded", function() {
    // This file is ready for future interactive logic (like handling the Search button, 
    // opening the guest dropdown, or initializing an image lightbox for the gallery).
    
    const searchBtn = document.querySelector(".search-bar-wrapper .btn-primary");
    
    if(searchBtn) {
        searchBtn.addEventListener("click", function() {
            // Placeholder action
            console.log("Searching availability for Young Wild & Free...");
        });
    }
});