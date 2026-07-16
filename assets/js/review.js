/* ==========================================================================
   REVIEW LOGIC (Merged from review.js and write-review.js)
   ========================================================================== */

// --- Testimonial Slideshow Logic ---
const testimonials = [
    {
        name: "John",
        text: "Amazing experience! I would definitely visit again."
    },
    {
        name: "Anna",
        text: "Beautiful scenery and friendly local people."
    },
    {
        name: "David",
        text: "One of the best natural attractions in Koh Kong."
    }
];

let current = 0;

const testimonialTextEl = document.getElementById("testimonialText");
const testimonialNameEl = document.getElementById("testimonialName");

if (testimonialTextEl && testimonialNameEl) {
    setInterval(function () {
        current++;

        if (current >= testimonials.length) {
            current = 0;
        }

        testimonialTextEl.textContent = testimonials[current].text;
        testimonialNameEl.textContent = testimonials[current].name;
    }, 3000);
}

// --- Travel Type Active Toggle Logic (Write Review Form) ---
const buttons = document.querySelectorAll(".travel-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
    });
});
