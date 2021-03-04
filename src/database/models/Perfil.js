module.exports = function(sequelize, dataTypes) {
    let alias = "Perfil";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "perfiles",
        underscored: true
    }
    let Perfil = sequelize.define(alias, cols, config);
    Perfil.associate = function(models) {
        Perfil.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey: "perfil_id"
        });
    }
    return Perfil;
}