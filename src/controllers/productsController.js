const { decodeBase64 } = require('bcryptjs');
const { validationResult } = require('express-validator');
const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', 'utf-8'));
const db = require('../database/models');

const productsController = {
    productAdd: function(req, res, next) {
        
        let pedidoUnidad = db.Unidad.findAll();
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoSubCategoria = db.Sub_Categoria.findAll();
        let pedidoMarca = db.Marca.findAll();
        

        Promise.all([pedidoUnidad, pedidoCategoria, pedidoSubCategoria, pedidoMarca])
            .then(function(result){
                res.render('products/productAdd', {unidad:result[0], categoria:result[1], subcategoria:result[2], marca:result[3]})
            })
      },

    productStore: function(req, res, next) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Producto.create({
                descripcion: req.body.descripcion,
                descripcion_completa: req.body.descripcion_completa,
                marca_id: req.body.marca,
                presentacion: req.body.presentacion,
                unidad_id: req.body.medida,
                categoria_id: req.body.categoria,
                sub_categoria_id: req.body.subCategoria,
                precio: req.body.precio,
                imagen: req.files[0].filename
            });
            res.redirect('/products/list');
        } else {
            let pedidoUnidad = db.Unidad.findAll();
            let pedidoCategoria = db.Categoria.findAll();
            let pedidoSubCategoria = db.Sub_Categoria.findAll();
            let pedidoMarca = db.Marca.findAll();
        

            Promise.all([pedidoUnidad, pedidoCategoria, pedidoSubCategoria, pedidoMarca])
                .then(function(result){
                    res.render('products/productAdd', {unidad:result[0], categoria:result[1], subcategoria:result[2], marca:result[3], errors:errors.errors})
                })
        }
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

    productEditImage: function(req, res, next) {
        let pedidoProducto = db.Producto.findByPk(req.params.id);

        Promise.all([pedidoProducto])
            .then(function(result){
                res.render('products/productEditImage', {producto:result[0]})
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
            precio: req.body.precio,
        }, {
            where: {
                id: req.params.id
            }    
        });

        res.redirect('/products/list');
    },

    productUpdateImage: function(req, res, next) {
        db.Producto.update({
            imagen: req.files[0].filename
        }, {
            where: {
                id: req.params.id
            }    
        });

        res.redirect('/products/list');
    },

    destroy: function(req, res, next) {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products/list")
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

    detalleProducto: function(req,res,next){
        db.Producto.findByPk(req.params.id, {include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}]})
        .then(function(producto){
            res.render('products/productDetail', {producto:producto, usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacen: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}], limit: 12})
        .then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacen1: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}], offset: 12 , limit: 12})
        .then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacen2: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}], offset: 24 , limit: 12})
        .then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacen3: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}], offset: 36 , limit: 12})
        .then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    brandAdd: function(req,res,next){
        res.render('products/brandAdd')
    },

    brandStore: function(req, res, next){
        db.Marca.create({
            marca: req.body.marca
        });
        res.redirect("/products/list")
    },

    unidadStore: function(req, res, next){
        db.Unidad.create({
            medida: req.body.unidad
        });
        res.redirect("/products/list")
    },

    categoryStore: function(req, res, next){
        db.Categoria.create({
            categoria: req.body.categoria
        });
        res.redirect("/products/list")
    },

    subCategoryStore: function(req, res, next){
        db.Sub_Categoria.create({
            sub_categoria: req.body.subCategoria
        });
        res.redirect("/products/list")
    },

    categoriaAlmacen: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenArrozYFideos: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 3
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenConservas: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 4
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenInfusionesCacao: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 5
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenSopasCaldosPure: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 6
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenMermeladasYDulces: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 7
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenPremezclaPostres: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 8
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenPanaderiaGalletitas: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 9
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenHarinas: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 11
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    almacenAceitesYAderezos: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 1,
                sub_categoria_id: 1
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    categoriaLacteos: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 4
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    lacteosDulceDeLeche: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 4,
                sub_categoria_id: 16
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    lacteosLecheLargaVida: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 4,
                sub_categoria_id: 18
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    lacteosLecheEnPolvo: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 4,
                sub_categoria_id: 17
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    categoriaPerfumeria: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 6
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    categoriaBebidas: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 2
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    bebidasAguaMineral: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 2,
                sub_categoria_id: 2
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    bebidasGaseosas: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 2,
                sub_categoria_id: 10
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    categoriaLimpieza: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 5
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    limpiezaPiso: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 5,
                sub_categoria_id: 22
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    limpiezaBanio: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 5,
                sub_categoria_id: 14
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    limpiezaCocina: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 5,
                sub_categoria_id: 15
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    limpiezaPapeles: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 5,
                sub_categoria_id: 21
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    categoriaBebes: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 3
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    bebesPaniales: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 3,
                sub_categoria_id: 20
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

    bebesOleoCalcareo: function(req,res,next){
        const usuarioLogueado = req.session.usuarioLogueado;
        db.Producto.findAll({
            where: {
                categoria_id: 3,
                sub_categoria_id: 19
            },
            include: [{all: true, nested: true}]
        }).then(function(products){
            res.render('products/almacen', {products:products, usuarioLogueado, importe: req.cookies.importe})
        })
        .catch(function(error){
            res.render('error')
            console.log(error)
        })
    },

}

module.exports = productsController;