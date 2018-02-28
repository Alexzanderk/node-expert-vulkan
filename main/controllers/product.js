const { Products, Category } = require('../../shared/models');

module.exports = {

    //GET /
    async showCategoriesWithProducts(req, res) {
        let products = await Products.find({ published: true });
        let rokla = await Products.find({ published: true, category: 'palletTruck' });
        let shtabeler = await Products.find({ published: true, category: 'stacker' });
        let electroShtabeler = await Products.find({ published: true, category: 'electricStacker' });
        let liftTable = await Products.find({ published: true, category: 'liftTable' });
        
        res.render('index', {
            id: 'front-page',
            products,
            rokla,
            shtabeler,
            electroShtabeler,
            liftTable
        });
    },

    //GET /product-catalog/
    async showProductsCatalog(req, res) {
        let catalog = await Category.find({ published: true }).populate('products', 'title slug');
        res.render('product-catalog', {
            id: 'product-catalog',
            catalog
        });
    },

    //GET /product-catalog/product/:alias
    async showProduct(req, res, next) {
        try {
            let [category, product] = await Promise.all([Category.find({ published: true }).populate('products'), Products.findById(req.params.id)]);

            res.render('product', {
                id: 'product',
                category,
                product,
                urlId: req.params.id
            });

        } catch (error) {
            next(error);
        }
    }
}