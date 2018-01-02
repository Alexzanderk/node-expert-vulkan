class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;

        view.on('add', this.addProduct.bind(this));
        view.on('remove', this.removeProduct.bind(this));
    }

    addProduct(product) {
        const item = this.model.addItem(product);

        this.view.addProduct(item);
    }

    removeProduct(id) {
        this.model.removeItem(id);
        this.view.removeProduct(id);
    }
}

export default Controller;