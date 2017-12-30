export const tab = (function () {
    
    function toggleTab(event) {
        event.preventDefault();

        const item = this.parentNode;
        const itemAttribute = item.getAttribute('data-tab');
        const itemsList = document.querySelectorAll('.catalog__item');
        const itemList = Array.prototype.filter.call(itemsList, element => element.getAttribute('data-list') === itemAttribute);
        
        Array.prototype.slice.call(item.parentNode.children).forEach(element => element.classList.remove('active'));
        item.classList.add('active');
        
        itemsList.forEach(element => element.classList.remove('active'));
        itemList[0].classList.toggle('active');
    }
    
    const tabButton = document.querySelectorAll('.product-list__link');
    tabButton.forEach(button => button.addEventListener('click', toggleTab));
})();