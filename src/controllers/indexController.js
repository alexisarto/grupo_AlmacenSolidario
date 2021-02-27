const db = require('../database/models');

const indexController = {
    home: function (req, res, next){
        db.Carrito.findAll({
            where: {
              estado: "cerrado",
            }
        }).then((carritos) => {
            var ventas = carritos.length;
            var personasAlcanzadas = 0;
                for (let i = 0; i < carritos.length; i++) {
                    personasAlcanzadas += carritos[i].personas_alcanzadas;
                }
            personasAlcanzadas = personasAlcanzadas.toFixed(0)
            db.Carrito_Producto.findAll()
            .then((productos) => {
                var cantidadProductosVendidos = 0;
                for (let i = 0; i < productos.length; i++) {
                    cantidadProductosVendidos += productos[i].cantidad;
                }
          res.render('index/home', {usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe, ventas, personasAlcanzadas, cantidadProductosVendidos})
          })
        })
    },

    instituciones: function (req, res, next){
        res.render('index/instituciones', {usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe})
    },

    aboutUs: function (req, res, next){
        res.render('index/aboutUs', {usuarioLogueado: req.session.usuarioLogueado,importe: req.cookies.importe })
    },

    losPiletones: function (req, res, next){
        res.render('index/losPiletones', {usuarioLogueado: req.session.usuarioLogueado});
    },

    losNiniosPrimero: function (req, res, next){
        res.render('index/losNiniosPrimero', {usuarioLogueado: req.session.usuarioLogueado});
    },

    losBajitos: function (req, res, next){
        res.render('index/losBajitos', {usuarioLogueado: req.session.usuarioLogueado});
    },

    manosEnAccion: function (req, res, next){
        res.render('index/manosEnAccion', {usuarioLogueado: req.session.usuarioLogueado});
    }
}

module.exports = indexController;
