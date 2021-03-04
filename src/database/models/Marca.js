module.exports = function(sequelize, dataTypes) {
    let alias = "Marca";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        marca: {
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
        tableName: "marcas",
        underscored: true
    }
    let Marca = sequelize.define(alias, cols, config);
    Marca.associate = function(models) {
        Marca.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "marca_id"
        });
    }
    return Marca;
}