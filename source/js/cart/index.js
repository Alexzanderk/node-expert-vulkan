import View from './view';
import Model from './model.js';
import Controller from './controller';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

export {model, view, controller};