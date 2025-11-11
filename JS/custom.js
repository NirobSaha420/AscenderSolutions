// mouse follower
Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.textAnimate(".text-target", {
  style: 1,
});
// preloader
  var loader = document.getElementById("preloader")
  window.addEventListener("load", function(){
  loader.style.display = "none";
  })
// nav active change
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  // Helper function to normalize paths
  function normalizePath(path) {
      return path.replace(/\/$/, ''); // Remove trailing slashes
  }
  navLinks.forEach(link => {
      link.classList.remove('active');
      try {
          const linkPath = new URL(link.href).pathname;
          // Compare normalized paths
          if(normalizePath(linkPath) === normalizePath(currentPath)) {
              link.classList.add('active');
          }
      } catch (error) {
          console.error('Error processing link:', link.href, error);
      }
  });
});
// Auto year change
document.getElementById('currentYear').textContent = new Date().getFullYear();
// Animations
// For appear-left elements
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  gsap.utils.toArray('.animation-appear-left').forEach(elem => {
    gsap.fromTo(elem,
      {opacity: 0, x: '-15vw', scale: 0.7},
      {
        opacity: 1, x: '0vw', scale: 1,
        ease: 'linear',
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'top 55%',
          scrub: true,
        }
      }
    );
  });
  // For appear-right elements
  gsap.utils.toArray('.animation-appear-right').forEach(elem => {
    gsap.fromTo(elem,
      {opacity: 0, x: '15vw', scale: 0.7},
      {
        opacity: 1, x: '0vw', scale: 1,
        ease: 'linear',
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'top 55%',
          scrub: true,
        }
      }
    );
  });
  // For appear-bottom elements
  gsap.utils.toArray('.animation-appear-bottom').forEach(elem => {
    gsap.fromTo(elem,
      {opacity: 0},
      {
        opacity: 1,
        ease: 'linear',
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'top 50%',
          scrub: true,
        }
      }
    );
  });
  // And appear-top elements
  gsap.utils.toArray('.animation-appear-top').forEach(elem => {
    gsap.fromTo(elem,
      {opacity: 0, y: '-10vw', scale: 0.5},
      {
        opacity: 1, y: '0vw', scale: 1,
        ease: 'linear',
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'top 50%',
          scrub: true,
        }
      }
    );
  });
}
// Animations
// typewritter effect
var typed = new Typed('.auto-type-main-heading', {
    strings: ['Evolve ', 'Unleash ', 'Master '],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true,
  });
var typed = new Typed('.auto-type-sub-main-heading', {
    strings: ['- Your next breakthrough Growth begins here... '],
    typeSpeed: 20,
    loop: false,
  });
var typed = new Typed('.auto-type-our-ascent', {   
    strings: ['  '],
    typeSpeed: 130,
    loop: false,
  });
// typewritter effect