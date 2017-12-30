export const menuMobile = (function() {
    const iconMenu = document.getElementById('menu-link');

    function toggleMenu(event) {
        event.preventDefault();

        this.classList.toggle('open');
    }

    iconMenu.addEventListener('click', toggleMenu);
})();