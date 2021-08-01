"use strict";

document.body.addEventListener("mousemove", function (evt) {
  var mouseX = evt.clientX;
  var mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });
});
