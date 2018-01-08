const fs = require('fs');
const path = require('path');

module.exports = {

    //POST /cart
    cartOrder(req, res) {
        let items = req.body;
        
        fs.readFile(path.resolve(__dirname, '..', 'data', 'order.json'), 'utf-8', (error, data) => {
            if (error) throw new Error;

            let currentFile = JSON.parse(data);
            currentFile.push(items);

            fs.writeFile(path.resolve(__dirname, '..', 'data', 'order.json'), JSON.stringify(currentFile, null, 4), (error) => {
                if (error) throw new Errorl
            });
        });

        res.end();
    }

}