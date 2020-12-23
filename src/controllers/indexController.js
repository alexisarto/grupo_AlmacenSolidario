const indexController = {
    home: function (req, res, next){
        res.render('index/home', {usuarioLogueado: req.session.usuarioLogueado})
    },

    instituciones: function (req, res, next){
        res.render('index/instituciones', {usuarioLogueado: req.session.usuarioLogueado})
    },

    aboutUs: function (req, res, next){
        res.render('index/aboutUs', {usuarioLogueado: req.session.usuarioLogueado})
    }
}

module.exports = indexController;
