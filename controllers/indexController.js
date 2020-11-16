const indexController = {
    home: function (req, res, next){
        res.render('index/home')
    },

    instituciones: function (req, res, next){
        res.render('index/instituciones')
    },

    aboutUs: function (req, res, next){
        res.render('index/aboutUs')
    }
}

module.exports = indexController;
