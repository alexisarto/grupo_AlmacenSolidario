const fs = require('fs');
const bcryptjs = require('bcryptjs');
var { check, validationResult, body } = require('express-validator');
var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', 'utf-8'));
var db = require('../database/models');
const usersController = {
  logout: function (req, res, next) {
    res.cookie("recordame", "", { expires: new Date() }); 
    req.session.destroy();
    res.redirect('/home');
  },

  passwordReset: function (req, res, next) {
    res.render('users/passwordReset');
  },

  crear: function(req, res, next) {
    res.render('users/crear');
  },

  registro: function(req, res, next) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const password = bcryptjs.hashSync(req.body.password, 10);
      db.Usuario.create( {
        nombre: req.body.name,
        email: req.body.email,
        password: password,
        perfil_id: 1
      }).then(function() {
        db.Usuario.findOne( {
          where: {
            email: req.body.email
          }
        }).then((newUser) =>{
          req.session.usuarioLogueado = newUser;
          res.redirect('/home');
          });
      });
    } else {
    res.render('users/crear', { errors: errors.errors });
    }
  },

  detallePerfil: function(req, res) {
    db.Usuario.findByPk(req.params.id)
    .then(function(user) {
      res.render('users/detallePerfil', {user: user})
    });
  },

  editarPerfil: function(req, res) {
    db.Usuario.findByPk(req.params.id)
    .then(function(user) {
      res.render('users/editarPerfil', {user: user})
    });
  },

  actualizarPerfil: function(req, res) {
    const errors = validationResult(req);
    db.Usuario.findByPk(req.params.id)
    .then(function(user) {
      const isPasswordValid = bcryptjs.compareSync(req.body.currentContrasenia, user.password);
    if (!isPasswordValid) {
        errors.errors.push({msg: "La contraseña actual es invalida"});
    }
    if (errors.isEmpty()) {
      user.nombre = req.body.name;
      const newPassword = req.body.password;
      if (newPassword) {
        user.password = bcryptjs.hashSync(newPassword, 10);
      }
      req.session.usuarioLogueado = user;
    db.Usuario.update({
      nombre: user.nombre,
      password: user.password,
    }, {
      where: {
        id: req.params.id
      }
    });
    res.redirect('/home');
  } else {
    const userBeingUpdated = {
      id: user.id,
      email: user.email,
      nombre: req.body.name
    };
    return res.render('users/editarPerfil', { user: userBeingUpdated, errors: errors.errors });
  }
});
 },

 formularioLogin: function (req, res, next) {
  res.render('users/ingresar');
},

ingresar: function (req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    db.Usuario.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(user) {
      if(!user) {
        return res.render('users/ingresar', {
          errors: [
            { msg: 'Usuario / contraseña inválidos' }
          ], email: req.body.email
        });
      }
      req.session.usuarioLogueado = user;
    if(req.body.recordame != undefined) {
      res.cookie('recordame', user.email, {maxAge: 7200000})
    }
    if (req.session.usuarioLogueado.perfil_id == 2) {
      res.redirect('/products/list');
    } else {
      db.Carrito.findOne( {
          where: {
              usuario_id: req.session.usuarioLogueado.id,
              estado: "abierto"
          }
      }).then(function(carrito) {
          if (!carrito) {
              db.Carrito.create( {
                  usuario_id: req.session.usuarioLogueado.id,
                  estado: "abierto"
              })
              .then(function() {
                res.redirect('/home');
              })
          } else {
            res.redirect('/home');
          }
      })
    }
    });
  } else {
    return res.render('users/ingresar', { errors: errors.errors });
  }
},

  carrito(req, res) {
    let totalGlobal = 0;
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "abierto"
      },
    }).then((carritoId) => {
        db.Carrito_Producto.findAll( {
        where: {
          carrito_id: carritoId.id
        },
        include: [{all: true, nested: true}]
      }).then((articulos) => {
        console.log('tipo de datos de articulos');
        console.log(typeof articulos);
        if (articulos.length != 0) {
          var total = 0;
          console.log('cantidad de datos en items:');
          console.log(articulos.length);
          console.log('tipo de dato precio:')
          console.log(typeof articulos[0].precio);
          console.log('tipo de dato cantidad:')
          console.log(typeof articulos[0].cantidad);
          console.log('tipo de dato productos.precio:');
          console.log(typeof articulos[0].productos.precio);
          console.log(articulos[0].productos.precio);
          for (let i = 0; i < articulos.length; i++) {
            total += articulos[i].cantidad * articulos[i].productos.precio;
          }
          total = total.toFixed(2);
          console.log('el total es:');
          console.log(total);
          totalGlobal = total;
          db.Carrito.update({
            total: total
          }, {
            where: {
              usuario_id: req.session.usuarioLogueado.id,
              estado: "abierto"
            },
          }).then(() => {
            db.Carrito.findOne({
              where: {
                usuario_id: req.session.usuarioLogueado.id,
                estado: "abierto"
              },
            }).then((carritoId) => {
            db.Carrito_Producto.findAll( {
              where: {
                carrito_id: carritoId.id
              },
              include: [{all: true, nested: true}]
            }).then((items) => {
              res.cookie('importe', totalGlobal, {maxAge: 7200000});
              return res.render("users/carrito", {items, carritoId, usuarioLogueado: req.session.usuarioLogueado, importe: totalGlobal});
            })
          })
          })
        } else {
          //alert("No tenés productos en el carrito");
          res.redirect('/products/almacen');
        }

      })
    });
  },

  modificarCantidad(req, res) {
    db.Carrito_Producto.update({
      cantidad: req.body.cantidad
    }, {
      where: {
        producto_id: req.body.productId
      }
    }).then(() => {
      return res.redirect('/users/carrito');
    });
  },

  incrementar(req, res) {
    db.Carrito_Producto.update({
      cantidad: parseInt(req.body.cantidad) + 1
    }, {
      where: {
        producto_id: req.body.productId
      }
    }).then(() => {
      return res.redirect('/users/carrito');
    });
  },

  reducir(req, res) {
    db.Carrito_Producto.update({
      cantidad: parseInt(req.body.cantidad) - 1
    }, {
      where: {
        producto_id: req.body.productId
      }
    }).then(() => {
      return res.redirect('/users/carrito');
    });
  },

  eliminarItem(req, res) {
    db.Carrito_Producto.destroy({
      where: {
        producto_id: req.body.productId
      }
    }).then(() => {
      return res.redirect('/users/carrito');
    });
  },

  addToCart(req, res) {
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "abierto"
      },
    }).then((carritoId) => {
      var carritoId = carritoId.id;
    
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      // Verifico que el producto no exista ya en el carrito
      db.Carrito_Producto.findOne({
        where: {
          carrito_id: carritoId,
          producto_id: req.body.productId
        },
        include: [{all: true, nested: true}]
      }).then((productoYaAgregado) => {
        if (productoYaAgregado != null) {
          console.log('ese producto ya fue ingresado al carrito');
          //alert('El producto ' + productoYaAgregado.productos.descripcion + 'ya está en el carrito')
          res.redirect("carrito");
        } else {
      // Busco el producto que voy a agregar como Item.
      db.Producto.findByPk(req.body.productId)
        .then((product) => {
          return db.Carrito_Producto.create({
            carrito_id: carritoId,
            precio: req.body.precio,
            cantidad: 1,
            producto_id: product.id,
          });
        })
        .then(() => {
          db.Carrito.findOne({
            where: {
              usuario_id: req.session.usuarioLogueado.id,
              estado: "abierto"
            },
          }).then((carritoId) => {
              db.Carrito_Producto.findAll( {
              where: {
                carrito_id: carritoId.id
              },
              include: [{all: true, nested: true}]
            }).then((articulos) => {
              var total = 0;
              for (let i = 0; i < articulos.length; i++) {
                total += articulos[i].cantidad * articulos[i].productos.precio;
              }
              total = total.toFixed(2);
              res.cookie('importe', total, {maxAge: 7200000});
              db.Carrito.update({
                total: total
              }, {
                where: {
                  usuario_id: req.session.usuarioLogueado.id,
                  estado: "abierto"
                },
              }).then(() => {
                return res.redirect("carrito");
              })
            })
          })
        });
        }
      }) 
    } else {
       Product.findByPk(req.body.productId)
         .then(product => {
            return res.render('products/productDetail', {product, errors: errors.mapped()})
         })
    }
  })
  },

  deleteFromCart(req, res) {
    db.Carrito_Producto.destroy({
      where: {
        id: req.body.itemId,
      },
      force: true,
    })
      .then((response) => res.redirect("/users/carrito"))
      .catch((e) => console.log(e));
  },

shop(req, res) {
  // cierro el carrito
  db.Carrito.update({
    estado: "cerrado"
  }, {
    where: {
      usuario_id: req.session.usuarioLogueado.id,
      estado: "abierto"
    }
  })
      // elimino cookie importe del carrito
    .then(() => {
      res.clearCookie('importe')
      return res.redirect('/home')})
    .catch((e) => console.log(e));
  },

  history(req, res) {
    db.Carrito.findAll({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "cerrado"
      },
      include: {
        all: true,
        nested: true,
        paranoid: false,
      },
      order: [["updated_at", "DESC"]],
    })
      .then((carts) => {
        console.log('estos son los carritos de samuel:')
        console.log(carts);

        // console.log(carts[1].id);
      //   db.Carrito_Producto.findAll( {
      //   where: {
      //     carrito_id: carts[0].id
      //   },
      //   include: [{all: true, nested: true}]
      // }).then((items) => {
      //   console.log('que carrito es este?')
      //   console.log(items[0]);
        
        res.render("users/historial", { carts });
      })
      .catch((e) => console.log(e));
    // })
  }
}


module.exports = usersController;