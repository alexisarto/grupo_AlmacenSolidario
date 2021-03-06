var db = require('../../database/models');
let sequelize = db.sequelize;

const salesController = {
    cantidadVentas: function(req, res) {
        db.Carrito.findAll({
            where: {
              estado: "cerrado"
            }
        }).then(function(ventas) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/sales/totalVentas"
                },
                data: ventas.length
            };
            res.json(respuesta);
        })
    },

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
                include: [{association: "carritos", include: [{association: "usuario", attributes: { exclude: ['password'] }}]}, {association: "productos", include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}]}]
              });
            };
            Promise.all(carritos)
            .then(function(sales){
                for (let i = 0; i < sales.length; i++) {
                    sales[i][0].setDataValue("endpoint", "/api/sales/" + sales[i][0].carrito_id);
                }
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
        db.Carrito_Producto.findAll({
            where: {
                carrito_id: req.params.id, 
            }, 
            include: [{association: "carritos", include: [{association: "usuario", attributes: { exclude: ['password'] }}]}, {association: "productos", include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}]}]
        }).then(function(sale) {
            res.json(sale)
            });
        },

    ultimaVenta: function(req, res) {
        db.Carrito.findOne({
            where: {
              estado: "cerrado"
            },
            order: [["updated_at", "DESC"]],
        }).then((cart) => {
            db.Carrito_Producto.findAll({
                where: {
                  carrito_id: cart.id
                },
                include: [{association: "carritos", include: [{association: "usuario", attributes: { exclude: ['password'] }}]}, {association: "productos", include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}]}]
        }).then(function(lastSale) {
            let respuesta = {
                meta: {
                    status: 200,
                    usuario: lastSale[0].carritos.usuario.nombre,
                    fecha: cart.updated_at,
                    importe: cart.total,
                    url: "/api/sales/ultimaVenta"
                },
                data: lastSale
            };
            res.json(respuesta);
        })
        });
    },
    ventaMasCara: function(req, res) {
        db.Carrito.findOne({
            where: {
              estado: "cerrado"
            },
            order: [["total", "DESC"]],
        }).then((cart) => {
            db.Carrito_Producto.findAll({
                where: {
                  carrito_id: cart.id
                },
                include: [{association: "carritos", include: [{association: "usuario", attributes: { exclude: ['password'] }}]}, {association: "productos", include: [{association: "marca"}, {association: "categoria"}, {association: "unidad"}, {association: "sub_categoria"}]}]
        }).then(function(highestSale) {
            let respuesta = {
                meta: {
                    status: 200,
                    usuario: highestSale[0].carritos.usuario.nombre,
                    fecha: cart.updated_at,
                    importe: cart.total,
                    url: "/api/sales/ventaMasCara"
                },
                data: highestSale
            };
            res.json(respuesta);
        })
        });
    },

    cantidadDonacionesPorInstitucion: function(req, res) {
        sequelize.query("SELECT nombre, COUNT(*) AS cantidad FROM carritos INNER JOIN instituciones ON institucion_id = instituciones.id GROUP BY nombre")
        .then(function(donacionesPorInstitucion) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/sales/cantidadDeDonacionesPorInstitucion"
                },
                data: donacionesPorInstitucion[0]
            };
            res.json(respuesta);
        });
    },

    productosMasVendidos: function(req, res) {
        sequelize.query("SELECT productos.descripcion, SUM(cantidad) AS cantidad FROM carrito_producto INNER JOIN carritos ON carritos.id = carrito_id INNER JOIN productos ON productos.id = producto_id WHERE carritos.estado = 'cerrado' GROUP BY producto_id ORDER BY SUM(cantidad) DESC LIMIT 6")
        .then(function(productosMasVendidos) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/sales/productosMasVendidos"
                },
                data: productosMasVendidos[0]
            };
            res.json(respuesta);
        });
    },

    }

    module.exports = salesController;