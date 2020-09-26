// lets animate using gsap
$(document).ready(function () {
  // register scrolltrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger MatchMedia -> for responsive animation.
  // for now we are just animating on desktop and above devices

  ScrollTrigger.matchMedia({
    "(min-width:992px)": function () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".product_image",
          markers: true,
          start: "top 10%",
          end: "bottom 15%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(".step_one_content", {
        opacity: 0,
        duration: 0.5,
      })
        .to(".product_image", { x: "-100%", duration: 1 }) // moving the image towards left
        .fromTo(".step_two_content", { opacity: 0 }, { opacity: 1 }); // showing the second step content
    },
  });
});
