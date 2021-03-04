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
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "categorias",
        underscored: true
    }
    let Categoria = sequelize.define(alias, cols, config);
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "categoria_id"
        });
        Categoria.hasMany(models.Sub_Categoria, {
            as: "categorias",
            foreignKey: "categoria_id"
        });
    }
    return Categoria;
}