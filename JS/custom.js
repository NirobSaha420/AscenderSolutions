// mouse follower
Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.textAnimate(".text-target", {
  style: 1,
  duration: 3,
  delay: .125,
});
// preloader
  var loader = document.getElementById("preloader")
  window.addEventListener("load", function(){
  loader.style.display = "none";
  })
// Auto year change
document.getElementById('currentYear').textContent = new Date().getFullYear();
// typewritter effect
var typed = new Typed('.auto-type-main-heading', {
    strings: ['Evolve ', 'Unleash ', 'Master '],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true,
  });
var typed = new Typed('.auto-type-sub-main-heading', {
    strings: ['- Your next breakthrough Growth begins here... '],
    typeSpeed: 30,
    loop: false,
  });
var typed = new Typed('.auto-type-our-ascent', {   
    strings: ['  '],
    typeSpeed: 130,
    loop: false,
  });
// typewritter effect