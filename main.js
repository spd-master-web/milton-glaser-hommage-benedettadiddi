/*
gsap.from(".text-1", { opacity: 0, duration:5});
gsap.to(".text-1", { opacity: 1 });

gsap.from(".text-2", { opacity: 0, duration:5, delay:6});
gsap.to(".text-2", { opacity: 1 });
*/

gsap.set(".poster", {scale:0.5});
gsap.timeline()
    .from(".poster", {duration:1, opacity:0})
    .from(".text", {opacity:0, scale:0, ease:"back"})
    .from(".paragraph", {x:900, duration:2})