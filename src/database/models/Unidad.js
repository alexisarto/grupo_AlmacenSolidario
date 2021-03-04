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
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "unidades",
        underscored: true
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