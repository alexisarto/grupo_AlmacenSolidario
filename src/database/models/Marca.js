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
        }
    };
    let config = {
        tableName: "marcas",
        timestamps: false
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