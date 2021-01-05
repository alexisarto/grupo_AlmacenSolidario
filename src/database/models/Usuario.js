module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        perfil_id: dataTypes.INTEGER
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Perfil, {
            as: "perfil",
            foreignKey: "perfil_id"
        });
        Usuario.hasMany(models.Carrito, {
            as: "carritos",
            foreignKey: "usuario_id"
        });
    }
    return Usuario;
}