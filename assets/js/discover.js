const slider = document.getElementById("budgetSlider");
const usdValue = document.getElementById("usdValue");
const khrValue = document.getElementById("khrValue");

function updateSlider() {

    let usd = slider.value;
    let khr = usd * 4000;

    usdValue.textContent = usd;
    khrValue.textContent = khr.toLocaleString();

    // Blue progress effect
    const percent =
        ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

    slider.style.background =
        `linear-gradient(
            to right,
            #4285f4 0%,
            #4285f4 ${percent}%,
            #ccc ${percent}%,
            #ccc 100%
        )`;
}
// Update while sliding
slider.addEventListener("input", updateSlider);

// Run once when page loads
updateSlider();
