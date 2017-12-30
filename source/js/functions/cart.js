export const cart = (function (){
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');

    const openButton = document.querySelector('.cart__link');
    const closeButton = document.querySelector('.close-modal');

    openButton.addEventListener('click', (event) => {
        event.preventDefault();

        const menu = document.getElementById('menu-link');
        if ( menu.classList.contains('open') ) menu.classList.remove('open');

        modalOverlay.classList.add('active');
        modal.classList.add('active');
    });
    
    closeButton.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        modal.classList.remove('active');
    });
})();