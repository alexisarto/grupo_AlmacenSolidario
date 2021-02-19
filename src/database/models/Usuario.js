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
        perfil_id: { 
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "usuarios",
        underscored: true
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