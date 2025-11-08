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