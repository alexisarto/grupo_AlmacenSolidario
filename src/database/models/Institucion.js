module.exports = function(sequelize, dataTypes) {
    let alias = "Institucion";
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
        tableName: "instituciones",
        underscored: true
    }
    let Institucion = sequelize.define(alias, cols, config);
    Institucion.associate = function(models) {
        Institucion.hasMany(models.Carrito, {
            as: "carritos",
            foreignKey: "institucion_id"
        });
    }
    return Institucion;
}