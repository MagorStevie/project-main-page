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


let split = SplitText.create(".text", {
    type: "chars, words"
});

gsap.from(split.chars, {
    duration: 1.5,
    yPercent: "random([-50, 50])",
    rotation: "random([-10, 10])",
    ease: "back.out",
    autoAlpha:0,
    stagger: {
        amount: 0.5,
        from: "random",
    }
});