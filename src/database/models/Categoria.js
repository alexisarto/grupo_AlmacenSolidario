module.exports = function(sequelize, dataTypes) {
    let alias = "Categoria";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        categoria: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "categorias"
    }
    let Categoria = sequelize.define(alias, cols, config);
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "categoria_id"
        });
    }
    return Categoria;
}