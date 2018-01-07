import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import { tab } from './functions/tab';
import { menuMobile } from './functions/menuMobile';
import { menuCatalog } from './functions/productCatalogMenu';
import { Controller, Model, View, save, load } from './cart';


const state = load();
console.log(state);
const model = new Model(state || undefined);
model.on('change', state => save(state));

const view = new View();
const controller = new Controller(model, view);