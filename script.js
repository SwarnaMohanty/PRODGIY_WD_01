window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Change background color when scrolled
        navbar.style.color = '#fff'; // Change font color when scrolled
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
        navbar.style.color = '#fff'; // Original font color
    }
});
