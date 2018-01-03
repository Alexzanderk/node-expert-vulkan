class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;

        view.on('add', this.addProduct.bind(this));
        view.on('remove', this.removeProduct.bind(this));

        view.show(model.items);
    }

    addProduct(product) {
        const item = this.model.addItem(product);
        const itemSum = this.model.changeCartItemsQuantity();
        
        this.view.addProduct(item);
        this.view.changeCartQuantity(itemSum);
    }
    
    removeProduct(id) {
        this.model.removeItem(id);
        const itemSum = this.model.changeCartItemsQuantity();
        this.view.removeProduct(id);
        this.view.changeCartQuantity(itemSum);
    }
}

export default Controller;