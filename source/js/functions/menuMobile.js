export const menuMobile = (function() {
    const iconMenu = document.getElementById('menu-link');

    function toggleMenu(event) {
        event.preventDefault();

        this.classList.toggle('open');
    }
    
    if (iconMenu !== null) iconMenu.addEventListener('click', toggleMenu);
})();