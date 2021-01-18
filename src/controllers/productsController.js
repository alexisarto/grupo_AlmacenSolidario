const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', 'utf-8'));
const db = require('../database/models');

const productsController = {
    productAdd: function(req, res, next) {
        let pedidoUnidad = db.Unidad.findAll();
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoSubCategoria = db.Sub_Categoria.findAll();
        

        Promise.all([pedidoUnidad, pedidoCategoria, pedidoSubCategoria])
            .then(function(result){
                res.render('products/productAdd', {unidad:result[0], categoria:result[1], subcategoria:result[2]})
            })
      },

    productStore: function(req, res, next) {
        db.Producto.create({
            descripcion: req.body.descripcion,
            descripcion_completa: req.body.descripcion_completa,
            marca_id: req.body.marca,
            presentacion: req.body.presentacion,
            unidad_id: req.body.medida,
            categoria_id: req.body.categoria,
            sub_categoria_id: req.body.subCategoria,
            precio: req.body.precio
        });
        console.log(req.body.marca)
        res.render('products/list');
    },
    
    productEdit: function(req, res, next) {
        
        let pedidoProducto = db.Producto.findByPk(req.params.id);
        let pedidoMarca = db.Marca.findAll();
        let pedidoUnidad = db.Unidad.findAll();
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoSubCategoria = db.Sub_Categoria.findAll();

        Promise.all([pedidoProducto, pedidoMarca, pedidoUnidad, pedidoCategoria, pedidoSubCategoria])
            .then(function(result){
                res.render('products/productEdit', {producto:result[0] , marcas:result[1], unidades:result[2], categorias:result[3], subcategorias:result[4]})
            })
            .catch(function(error){
                
                console.log(error)
                res.render('error')
            })
    },

    productUpdate: function(req, res, next) {
        db.Producto.update({
            descripcion: req.body.descripcion,
            descripcion_completa: req.body.descripcion_completa,
            marca_id: req.body.marca,
            presentacion: req.body.presentacion,
            unidad_id: req.body.medida,
            categoria_id: req.body.categoria,
            sub_categoria_id: req.body.subCategoria,
            precio: req.body.precio
        }, {
            where: {
                id: req.params.id
            }    
        });

        res.redirect('products/list');
    },

    destroy: function(req, res, next) {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        });
        res.render("products/list")
    },

    list: function(req, res, next) {
        db.Producto.findAll({include: [{association: "marca"}, {association: "categoria"}]})
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
        db.Producto.findByPk(req.params.id, {include: [{association: "marca"}, {association: "categoria"}]})
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