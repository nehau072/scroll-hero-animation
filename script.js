gsap.registerPlugin(ScrollTrigger);

const eyebrow = document.querySelector(".eyebrow");
const title = document.querySelector(".hero-title");
const stats = document.querySelectorAll(".stat");

const visual = document.querySelector(".visual-object");
const product = document.querySelector(".product");
const glow = document.querySelector(".visual-glow");

const rings = document.querySelectorAll(".visual-ring");
const scrollIndicator = document.querySelector(".scroll-indicator");
const heroContent = document.querySelector(".hero-content");


/* =========================
   INITIAL LOAD ANIMATION
========================= */

const intro = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


intro
    .from(eyebrow, {
        opacity: 0,
        y: 25,
        duration: 0.7
    })

    .from(title, {
        opacity: 0,
        y: 80,
        scale: 0.95,
        duration: 1.1
    }, "-=0.3")

    .from(stats, {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.12
    }, "-=0.5")

    .from(visual, {
        opacity: 0,
        scale: 0.75,
        duration: 1.2
    }, "-=0.9");


/* =========================
   SCROLL INDICATOR
========================= */

gsap.to(scrollIndicator, {

    opacity: 0,

    y: 30,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "20% top",

        scrub: true

    }

});


/* =========================
   MAIN SCROLL ANIMATION
========================= */

const scrollAnimation = gsap.timeline({

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


scrollAnimation

    .to(visual, {

        x: 260,

        y: 280,

        scale: 0.55,

        rotation: 150,

        ease: "none"

    })

    .to(product, {

        rotation: -35,

        scale: 0.85,

        ease: "none"

    }, "<")

    .to(rings, {

        rotation: 160,

        scale: 1.35,

        ease: "none"

    }, "<")

    .to(glow, {

        scale: 2,

        opacity: 0.15,

        ease: "none"

    }, "<");


/* =========================
   HEADLINE PARALLAX
========================= */

gsap.to(heroContent, {

    y: -140,

    opacity: 0.2,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


/* =========================
   EXTRA RING PARALLAX
========================= */

gsap.to(".ring-one", {

    x: -100,

    y: -70,

    rotation: -90,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1.5

    }

});


gsap.to(".ring-two", {

    x: 120,

    y: 100,

    rotation: 130,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 2

    }

});


/* =========================
   PRODUCT FLOATING EFFECT
========================= */

gsap.to(product, {

    y: -15,

    duration: 2,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});
/* =========================
   MOUSE PARALLAX
========================= */

const mouseX = gsap.quickTo(visual, "x", {
    duration: 0.8,
    ease: "power3.out"
});

const mouseY = gsap.quickTo(visual, "y", {
    duration: 0.8,
    ease: "power3.out"
});

window.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 30;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    mouseX(x);
    mouseY(y);

});