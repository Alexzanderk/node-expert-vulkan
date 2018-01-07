class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;
        
        view.on('add', this.addProduct.bind(this));
        view.on('remove', this.removeProduct.bind(this));
        view.on('order', this.orderCart.bind(this));

        view.show(model.items);
    }

    addProduct(product) {
        const item = this.model.addItem(product);
        const itemSum = this.model.itemsQuantity();
        const total = this.model.totalItems();
        
        this.view.addProduct(item);
        this.view.changeCartQuantity(itemSum);
        this.view.totalProductQuantity(total);
    }
    
    removeProduct(id) {
        this.model.removeItem(id);
        
        const itemSum = this.model.itemsQuantity();
        const total = this.model.totalItems();
        
        this.view.removeProduct(id);
        this.view.changeCartQuantity(itemSum);
        this.view.totalProductQuantity(total);
    }

    orderCart() {
        this.model.orderItems();
        this.view.deleteAllCartProducts();
        this.view.changeCartQuantity(this.model.items);
        this.view.closeCart();
    }

}

export default Controller;