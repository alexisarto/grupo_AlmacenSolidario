const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', 'utf-8'));
const productsController = {
    productAdd: function(req, res, next) {
        res.render('products/productAdd');
      },
    productStore: function(req, res, next) {
        let newProduct = {
            id: parseInt(products[products.length -1].id) + 1,
            item: req.body.item,
            marca: req.body.marca,
            presentacion: req.body.presentacion,
            medida: req.body.medida,
            categoria: req.body.categoria,
            precio: req.body.precio,
            imagen_producto: req.files[0].filename
        };
        products.push(newProduct);
        let productsJSON = JSON.stringify(products, null, 2);
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
            res.render('products/productEdit', {productFound});
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
                productoEditado.imagen_producto = req.files[0].filename
                return productoEditado;
            }
            return product;
        });
        editProductsJSON = JSON.stringify(editProducts, null, 2);
        fs.writeFileSync(__dirname + '/../data/products.json', editProductsJSON);
        res.redirect('/products/list');
    },

    destroy: function(req, res, next) {
        var idProduct = req.params.id;
        var productFound;
        for (var i = 0; i < products.length; i++) {
            if (products[i].id == idProduct) {
                productFound = products[i];
                break;
            }
        }
        if (productFound) {
            var productDestroy = products.filter(function(product) {
                return product.id != idProduct;
            });
            productsDestroyJSON = JSON.stringify(productDestroy);
            fs.writeFileSync(__dirname + '/../data/products.json', productsDestroyJSON);
            products = productDestroy;
            res.redirect('/products/list');
        } else {
            res.send('Producto invalido');
        }
    },

    list: function(req, res, next) {
        res.render('products/list', {products});
    },

    carrito: function(req,res,next){
        res.render("products/productCart",);
    },

    detalleProducto: function(req,res,next){
        res.render("products/productDetail");
    },

    almacen: function(req,res,next){
        res.render("products/almacen", {products});
    }

}

module.exports = productsController;