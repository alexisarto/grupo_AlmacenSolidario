var db = require('../../database/models');
const productsController = {
    list: function(req, res) {
        db.Producto.findAll({
            include: [{association: "marca"}, {association: "categoria"}]})
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
            res.send(product)
            });
        },
    }

    module.exports = productsController;