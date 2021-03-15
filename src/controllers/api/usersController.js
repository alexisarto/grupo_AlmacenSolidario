var db = require('../../database/models');
const usersController = {
    cantidadUsuarios: function(req, res) {
        db.Usuario.findAll({
            where: {
                perfil_id: 1
              }
        })
        .then(function(usuarios) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/users/totalUsuarios"
                },
                data: usuarios.length
            };
            res.json(respuesta);
        })
    },

    list: function(req, res) {
        db.Usuario.findAll({attributes: { exclude: ['password'] },
            include: [{association: "perfil"}, {association: "carritos"}]})
            .then(function(usuarios){
                const nuevoUsuarios = usuarios.map(usuario => {
                    usuario.setDataValue("endpoint", "/api/users/" + usuario.id);
                    return usuario;
                })
                let respuesta = {
                    meta: {
                        status: 200,
                        total: nuevoUsuarios.length,
                        url: "/api/users"
                    },
                    data: nuevoUsuarios
                };
                res.json(respuesta);
            })
        },
    find: function(req, res) {
        db.Usuario.findByPk(req.params.id, {attributes: { exclude: ['password'] }})
        .then(function(user) {
            res.json(user)
            });
        },
    }
module.exports = usersController;