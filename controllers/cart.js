const fs = require('fs');
const path = require('path');

module.exports = {

    //POST /cart
    cartOrder(req, res) {
        let items = req.body;
        

        items = JSON.stringify([items.name, items.tel, items.items], null, 4);
        
        
        fs.writeFile(path.resolve(__dirname, '..', 'data', 'order.json'), items, 'utf8' );
        res.end();
    }

}