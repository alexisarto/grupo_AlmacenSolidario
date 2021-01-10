module.exports = function(sequelize, dataTypes) {
    let alias = "Unidad";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        medida: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "unidades",
        timestamps: false
    }
    let Unidad = sequelize.define(alias, cols, config);
    Unidad.associate = function(models) {
        Unidad.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "unidad_id"
        });
    }
    return Unidad;
}