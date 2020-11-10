const indexController = {
    home: function (req, res, next){
        res.render('home')
    },

    instituciones: function (req,res, next){
        res.render('instituciones')
    }
}

module.exports = indexController;
