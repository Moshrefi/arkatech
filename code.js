window.onscroll = function () {
  // scrollFunction();
  // activeNavbar();
};

function scrollFunction() {
  console.log(screen.width)
  if (screen.width > 360) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "100px";
    } else {
      document.getElementById("navbar").style.height = "120px";
    }
  }
}


// window.addEventListener('DOMContentLoaded', event => {

//   // Activate Bootstrap scrollspy on the main nav element
//   const mainNav = document.body.querySelector('#mainNav');
//   if (mainNav) {
//     new bootstrap.ScrollSpy(document.body, {
//       target: '#mainNav',
//       offset: 74,
//     });
//   };

//   // Collapse responsive navbar when toggler is visible
//   const navbarToggler = document.body.querySelector('.navbar-toggler');
//   const responsiveNavItems = [].slice.call(
//     document.querySelectorAll('#navbarResponsive .nav-link')
//   );
//   responsiveNavItems.map(function (responsiveNavItem) {
//     responsiveNavItem.addEventListener('click', () => {
//       if (window.getComputedStyle(navbarToggler).display !== 'none') {
//         navbarToggler.click();
//       }
//     });
//   });

// });