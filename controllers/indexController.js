const indexController = {
    home: function (req, res, next){
        res.render('home')
    },

    instituciones: function (req, res, next){
        res.render('instituciones')
    },

    aboutUs: function (req, res, next){
        res.render('aboutUs')
    }
}

module.exports = indexController;
