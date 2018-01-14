import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import { tab } from './functions/tab';
import { menuMobile } from './functions/menuMobile';
import { menuCatalog } from './functions/productCatalogMenu';
import { Controller, Model, View, save, load } from './cart';


if (document.getElementById('headerCart')) {
    const state = load();

    const model = new Model(state || undefined);
    model.on('change', state => save(state));

    const view = new View();
    const controller = new Controller(model, view);
}