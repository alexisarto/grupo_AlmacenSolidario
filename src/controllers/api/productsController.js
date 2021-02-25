var db = require('../../database/models');
const productsController = {
    cantidadProductos: function(req, res) {
        db.Producto.findAll()
        .then(function(productos) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/products/totalProductos"
                },
                data: productos.length
            };
            res.json(respuesta);
        })
    },

    list: function(req, res) {
        db.Producto.findAll({
            order: ["descripcion"],
            include: [{association: "marca"}, {association: "categoria"}, {association: "sub_categoria"}, {association: "unidad"}]})
            .then(function(productos){
                for (let i = 0; i < productos.length; i++) {
                    productos[i].setDataValue("endpoint", "/api/products/" + productos[i].id);
                }
                let respuesta = {
                    meta: {
                        status: 200,
                        total: productos.length,
                        url: "/api/products"
                    },
                    data: productos
                };
                res.json(respuesta);
            })
        },
    
    find: function(req, res) {
        db.Producto.findByPk(req.params.id)
        .then(function(product) {
            res.json(product)
            });
        },

    last: function(req, res) {
        db.Producto.findOne({
            order: [["created_at", "DESC"]],
            include: [{association: "marca"}, {association: "categoria"}, {association: "sub_categoria"}, {association: "unidad"}]})
            .then(function(producto){
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/products/ultimoProductoInsertado"
                    },
                    data: {
                        id: producto.id,
                        descripcion: producto.descripcion,
                        descripcion_completa: producto.descripcion_completa,
                        marca: producto.marca.marca,
                        presentacion: producto.presentacion,
                        precio: producto.precio,
                        imagen: producto.imagen,
                        imagen_url: "http://localhost:3001/images/products/" + producto.imagen,
                        categoria: producto.categoria.categoria,
                        subcategoria: producto.sub_categoria.sub_categoria,
                        unidad: producto.unidad.medida
                    },
                };
                res.json(respuesta);
            })
        },

    categorias: function(req, res) {
        db.Categoria.findAll()
        .then(function(categorias) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/products/categorias"
                },
                data: categorias
            };
            res.json(respuesta);
        })
    },
}

    module.exports = productsController;