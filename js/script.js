gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: true
})

let button = document.querySelector(".home_button")

button.addEventListener("click", (e) => {
    smoother.scrollTo("h1", true, "center, center")
})