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
        }
    };
    let config = {
        tableName: "perfiles",
        timestamps: false
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