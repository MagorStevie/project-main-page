gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: true
});

let button = document.querySelector(".home_button")

button.addEventListener("click", (e) => {
    smoother.scrollTo("h1", true, "center, center")
});


let split = SplitText.create(".text", {type: "chars ,words, lines"});

gsap.from(split.chars, {
    duration: 1.4,
    y:100,
    autoAlpha:0,
    stragger: 0.05
});