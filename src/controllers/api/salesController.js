var db = require('../../database/models');
const salesController = {
    list: function(req, res) {
        db.Carrito.findAll({
            where: {
              estado: "cerrado"
            },
            order: [["updated_at", "DESC"]],
          }).then((carts) => {
            let carritos = [];
            for (let i = 0; i < carts.length; i++) {
              carritos[i] = db.Carrito_Producto.findAll({
                where: {
                  carrito_id: carts[i].id
                },
                include: [{all: true, nested: true}]
              });
            };
            Promise.all(carritos)
            .then(function(sales){
                //for (let i = 0; i < sales.length; i++) {
                //    sales[i].setDataValue("endpoint", "/api/sales/" + sales[i].id);
                //}
                let respuesta = {
                    meta: {
                        status: 200,
                        total: sales.length,
                        url: "/api/sales"
                    },
                    data: sales
                };
                res.json(respuesta);
            })
        })
    },

    find: function(req, res) {
        db.Carrito_Producto.findOne({
            where: {
                carrito_id: req.params.id, 
            }, 
        include: [{all: true, nested: true}]
        }).then(function(sale) {
            res.send(sale)
            });
        },
    }

    module.exports = salesController;