document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', function () {
        header.classList.toggle('menu-open');
    });
});
