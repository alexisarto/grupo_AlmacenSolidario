var db = require('../../database/models');
const usersController = {
    list: function(req, res) {
        db.Usuario.findAll({
            include: [{association: "perfil"}, {association: "carritos"}]})
            .then(function(usuarios){
                for (let i = 0; i < usuarios.length; i++) {
                    usuarios[i].setDataValue("endpoint", "/api/users/" + usuarios[i].id);
                }
                let respuesta = {
                    meta: {
                        status: 200,
                        total: usuarios.length,
                        url: "/api/users"
                    },
                    data: usuarios
                };
                res.json(respuesta);
            })
        },
    find: function(req, res) {
        db.Usuario.findByPk(req.params.id)
        .then(function(user) {
            res.send(user)
            });
        },
    }
module.exports = usersController;