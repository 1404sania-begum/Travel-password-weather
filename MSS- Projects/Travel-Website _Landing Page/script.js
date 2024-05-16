const scrollRevealOption = {
    distance: "50px",
    origin: "botto",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_form", {
    ...scrollRevealOption,
    delay: 500,
});

// trending container
ScrollReveal().reveal(".trending__card", {
    ...scrollRevealOption,
    interval: 500,
});


// destination container
ScrollReveal().reveal(".destination__card", {
    duration: 1000,
    interval: 500,
});

// seller container
ScrollReveal().reveal(".seller__card", {
    ...scrollRevealOption,
    interval: 500,
});

// guide container
ScrollReveal().reveal(".guide__card", {
    ...scrollRevealOption,
    interval: 500,
});

//  client container
ScrollReveal().reveal(".client__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".section__title", {
    duration: 1000,
    interval: 500,
});
