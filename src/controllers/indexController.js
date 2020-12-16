const indexController = {
    home: function (req, res, next){
        res.render('index/home', {usuario: req.session.usuarioLogueado})
    },

    instituciones: function (req, res, next){
        res.render('index/instituciones')
    },

    aboutUs: function (req, res, next){
        res.render('index/aboutUs')
    }
}

module.exports = indexController;
