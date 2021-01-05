module.exports = function(sequelize, dataTypes) {
    let alias = "Carrito_Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.FLOAT
        },
        carrito_id: {
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "carrito_producto"
    }
    let Carrito_Producto = sequelize.define(alias, cols, config);
    Carrito_Producto.associate = function(models) {
        Carrito_Producto.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "producto_id"
        });
        Carrito_Producto.belongsTo(models.Carrito, {
            as: "carritos",
            foreignKey: "carrito_id"
        });
    }
    return Carrito_Producto;
}