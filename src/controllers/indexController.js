const indexController = {
    home: function (req, res, next){
        res.render('index/home', {usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe})
    },

    instituciones: function (req, res, next){
        res.render('index/instituciones', {usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe})
    },

    aboutUs: function (req, res, next){
        res.render('index/aboutUs', {usuarioLogueado: req.session.usuarioLogueado,importe: req.cookies.importe })
    }
}

module.exports = indexController;
