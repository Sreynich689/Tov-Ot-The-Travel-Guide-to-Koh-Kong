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

setInterval(function () {

    current++;

    if (current >= testimonials.length) {
        current = 0;
    }

    document.getElementById("testimonialText").textContent =
        testimonials[current].text;

    document.getElementById("testimonialName").textContent =
        testimonials[current].name;

}, 3000);
