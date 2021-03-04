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
        },
        categoria_id: {
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
        tableName: "sub_categorias",
        underscored: true

    }
    let Sub_Categoria = sequelize.define(alias, cols, config);
    Sub_Categoria.associate = function(models) {
        Sub_Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "sub_categoria_id"
        });
        Sub_Categoria.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        });
    }
    return Sub_Categoria;
}