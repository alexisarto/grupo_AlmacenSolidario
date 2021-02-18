module.exports = function(sequelize, dataTypes) {
    let alias = "Carrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        estado: {
            type: dataTypes.STRING,
        },
        total: {
            type: dataTypes.FLOAT,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "carritos",
        underscored: true
    };
    
    let Carrito = sequelize.define(alias, cols, config);

    Carrito.closeCarrito = function (idUser) {
        return sequelize.query(
          `UPDATE carrito SET estado = "cerrado" WHERE usuario_id = ${idUser} AND estado = "abierto"`
        );
      };
    
    Carrito.associate = function(models) {
        Carrito.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });
        Carrito.hasMany(models.Carrito_Producto, {
            as: "carrito_producto",
            foreignKey: "carrito_id"
        });
    }
    return Carrito;
}