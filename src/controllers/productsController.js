const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', 'utf-8'));
const db = require('../database/models');

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
        res.redirect('products/list');
    },
    
    productEdit: function(req, res, next) {
        let pedidoProducto = db.Producto.findByPk(req.params.id);
        let pedidoMarca = db.Marca.findAll();
        let pedidoUnidad = db.Unidad.findAll();
        let pedidoCategoria = db.Categoria.findAll();

        Promise.all([pedidoProducto, pedidoMarca, pedidoUnidad, pedidoCategoria])
            .then(function([producto, marcas, unidades, categorias]){
                res.render('products/productEdit', {producto:producto, marcas:marcas, unidades:unidades, categorias:categorias})
            })
            .catch(function(error){
                res.render('error')
                console.log(error)
            })
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
        products = editProducts;
        res.redirect('products/list');
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
        db.Producto.findAll()
        .then(function(productos){
            res.render('products/list', {productos:productos})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })   
    },

    carrito: function(req,res,next){
        res.render("products/productCart",);
    },

    detalleProducto: function(req,res,next){
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            res.render('products/productDetail', {producto:producto})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacen: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        res.render("products/almacen", {products, usuarioLogueado});
    }

}

module.exports = productsController;