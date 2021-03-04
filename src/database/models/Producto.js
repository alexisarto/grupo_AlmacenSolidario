module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        descripcion: {
            type: dataTypes.STRING
        },
        descripcion_completa: {
            type: dataTypes.STRING
        },
        marca_id: {
            type: dataTypes.INTEGER
        },
        presentacion: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.FLOAT
        },
        imagen: {
            type: dataTypes.STRING
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
        sub_categoria_id: {
            type: dataTypes.INTEGER
        },
        unidad_id: {
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
        tableName: "productos",
        underscored: true
    }
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models) {
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        });
        Producto.belongsTo(models.Sub_Categoria, {
            as: "sub_categoria",
            foreignKey: "sub_categoria_id"
        });
        Producto.belongsTo(models.Marca, {
            as: "marca",
            foreignKey: "marca_id"
        });
        Producto.belongsTo(models.Unidad, {
            as: "unidad",
            foreignKey: "unidad_id"
        });
        Producto.hasMany(models.Carrito_Producto, {
            as: "carrito_producto",
            foreignKey: "producto_id"
        });
    }
    return Producto;
}