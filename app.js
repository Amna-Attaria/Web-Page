window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const navbarLinks = document.querySelectorAll('#navbarNav .nav-link');

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#e0c111';
  } else {
    navbar.style.backgroundColor = 'black';
  }
});
