const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', 'utf-8'));
const productsController = {
    productAdd: function(req, res, next) {
        res.render('productAdd');
      },
    productStore: function(req, res, next) {
        products.push(req.body);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(__dirname + '/../data/products.json', productsJSON);
        res.redirect('/products/list');
    },
    
    productEdit: function(req, res, next) {
        var idProduct = req.params.id;
        var productFound;
        for (var i = 0; i < products.length; i++) {
            if (products[i].id == idProduct) {
                productFound = products[i];
                break;
            }
        }
        if (productFound) {
            res.render('productEdit', {productFound});
        } else {
            res.send('Producto invalido')
        }
    },

    productUpdate: function(req, res, next) {
        var idProduct = req.params.id;
        var editProducts = products.map(function(product) {
            if (product.id == idProduct) {
                let productoEditado = req.body;
                productoEditado.id = idProduct;
                return productoEditado;
            }
            return product;
        });
        editProductsJSON = JSON.stringify(editProducts);
        fs.writeFileSync(__dirname + '/../data/products.json', editProductsJSON);
        res.redirect('/products/list');
    },

    list: function(req, res, next) {
        res.render('list', {products});
    },

    carrito: function(req,res,next){
        res.render("productCart",);
    },

    detalleProducto: function(req,res,next){
        res.render("productDetail");
    },

    almacen: function(req,res,next){
        res.render("almacen");
    }

}

module.exports = productsController;