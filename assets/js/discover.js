const slider = document.getElementById("budgetSlider");
const usdValue = document.getElementById("usdValue");
const khrValue = document.getElementById("khrValue");
const activitiesSection = document.getElementById("activities");
let budgetReloadStarted = false;

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

function reloadToActivities() {
    if (budgetReloadStarted) {
        return;
    }

    budgetReloadStarted = true;
    updateSlider();
    sessionStorage.setItem("returnToActivities", "true");
    window.location.href = `${window.location.pathname}#activities`;
    window.location.reload();
}

slider.addEventListener("change", reloadToActivities);

window.addEventListener("load", function () {
    if (
        sessionStorage.getItem("returnToActivities") === "true" ||
        window.location.hash === "#activities"
    ) {
        sessionStorage.removeItem("returnToActivities");
        activitiesSection.scrollIntoView({ block: "start" });
    }
});

// Run once when page loads
updateSlider();
