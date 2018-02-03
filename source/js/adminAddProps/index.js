import { createElement } from './helpers';
export const adminAddProps = function() {
    //Cashe DOM
    const addRowButton = document.getElementById('add-props');
    const deletePropsTableButton = document.getElementById('delete-props-table');
    const table = addRowButton.parentNode.nextSibling.querySelector('.table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    
    function deleteAllRows(event) {
        event.preventDefault();
        
        while ( tbody.firstChild ) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    function addRow(event) {
        event.preventDefault();

        const theadTitles = [];
        thead.querySelector('tr').childNodes.forEach(el => theadTitles.push(el.innerText));
        
        const productIcons = ['NO ICON', 'box', 'arrow_10', 'weight', 'wallet', 'water'];

        const fragment = document.createDocumentFragment();
        const deleteIcon = createElement('span', {'aria-hidden': true}, '×');
        const deleteRowButton = createElement('button', {'class': 'close', 'aria-label': 'Close', 'type': 'button'}, deleteIcon);
        const iconSelect = createElement('select', {'class': 'form-control form-control-sm', 'name': 'icon', 'id': 'icon'});
        const tr = createElement('tr', {'class': 'tr'});

        for (let i = 0; i < theadTitles.length; i++) {
       
            if (theadTitles[i] === 'Иконка') {
       
                productIcons.map(icon => {
                    if (icon === 'box') {
                        let option = createElement('option', { 'value': `${icon}` }, 'Грузоподъемность');
                        iconSelect.appendChild(option)
                    } else if (icon === 'arrow_10') {
                        let option = createElement('option', { 'value': `${icon}` }, 'Высота подъема');
                        iconSelect.appendChild(option)
                    } else if (icon === 'weight') {
                        let option = createElement('option', { 'value': `${icon}` }, 'Вес');
                        iconSelect.appendChild(option)
                    } else if (icon === 'wallet') {
                        let option = createElement('option', { 'value': `${icon}` }, 'Стоимость');
                        iconSelect.appendChild(option)
                    } else if (icon === 'water') {
                        let option = createElement('option', { 'value': `${icon}` }, 'Литраж');
                        iconSelect.appendChild(option)
                    } else {
                        let option = createElement('option', { value: 'none', selected: 'selected'}, 'Вариант не выбран');
                        iconSelect.appendChild(option)

                    }
                });
       
                const thIconProps = createElement('th', {'class': 'th'}, iconSelect);
                tr.appendChild(thIconProps);
                
            } else if (theadTitles[i] === 'Название свойства') {
                
                const input = createElement('input', {'name': 'name', 'placeholder': theadTitles[i], 'class': 'form-control form-control-sm'});
                const formGroup = createElement('div', {'class': 'form-group'}, input);
                const thNameProps = createElement('th', {'class': 'th'}, formGroup);
                tr.appendChild(thNameProps);
                
            } else if ( theadTitles[i] === 'Значение свойства' ) {
                
                const input = createElement('input', {'name': 'value', 'placeholder': theadTitles[i], 'class': 'form-control form-control-sm'});
                const formGroup = createElement('div', {'class': 'form-group'}, input);
                const thValueProps = createElement('th', {'class': 'th'}, formGroup);
                tr.appendChild(thValueProps);
                
            } else if ( theadTitles[i] === '' ) {
                const thDeleteButton = createElement('th', {'class': 'th'}, deleteRowButton);
                tr.appendChild(thDeleteButton);
            }
        }
        
        fragment.appendChild(tr);
        tbody.appendChild(fragment);
        bindEvents();
    }

    function deleteRow(event) {
        const row = this.parentNode.parentNode;
        const tbody = row.parentNode;
        tbody.removeChild(row);
    }
    
    function bindEvents() {
        const deleteRowButtons = document.querySelectorAll('th>button.close');

        deleteRowButtons.forEach(button => button.addEventListener('click', deleteRow));
    }

    bindEvents();
    addRowButton.addEventListener('click', addRow);
    deletePropsTableButton.addEventListener('click', deleteAllRows);
}