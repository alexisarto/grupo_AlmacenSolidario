module.exports = function(sequelize, dataTypes) {
    let alias = "Sub_Categoria";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        sub_categoria: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "sub_categorias"
    }
    let Sub_Categoria = sequelize.define(alias, cols, config);
    Sub_Categoria.associate = function(models) {
        Sub_Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "sub_categoria_id"
        });
    }
    return Sub_Categoria;
}