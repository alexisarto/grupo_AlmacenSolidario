const fs = require('fs');
const bcryptjs = require('bcryptjs');
var { check, validationResult, body } = require('express-validator');
var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', 'utf-8'));
var db = require('../database/models');
const { types } = require('util');
const usersController = {
  logout: function (req, res, next) {
    res.cookie("recordame", "", { expires: new Date() }); 
    req.session.destroy();
    res.redirect('/home');
  },

  passwordReset: function (req, res, next) {
    res.render('users/passwordReset');
  },

  passwordForgot: function (req, res, next) {
    db.Usuario.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(user) {
      if(!user) {
        return res.render('users/passwordReset', {
          errors: [
            { msg: 'e-mail inválido' }
          ], email: req.body.email
        });
      }
    res.render('users/passwordReset');
    })
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
          db.Carrito.create({
            usuario_id: req.session.usuarioLogueado.id,
                  estado: "abierto"
          }).then(function() {
            res.redirect('/home');
          });
        });
      })
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
        res.clearCookie('importe');
          if (!carrito) {
              db.Carrito.create( {
                  usuario_id: req.session.usuarioLogueado.id,
                  estado: "abierto"
              })
              .then(function() {
                res.redirect('/home');
              })
          } else {
            res.cookie('importe', carrito.total, {maxAge: 7200000});
            res.redirect('/home');
          }
      })
    }
    });
  } else {
    return res.render('users/ingresar', { errors: errors.errors });
  }
},

list: function(req, res, next) {
  db.Usuario.findAll({include: [{all: true, nested: true}]})
  .then(function(usuarios){
      res.render('users/list', {usuarios:usuarios})
  })
  .catch(function(error){
      res.render('error')
      console.log(error)
  })   
},

destroy: function(req, res, next) {
  console.log('estoy listo para borrar este usuario')
  db.Carrito.findAll({
    where: {
      usuario_id: req.params.id,
      estado: "cerrado"
    },
    include: [{association: "usuario"}]
  }).then((compras) => {
    console.log(compras[0]);
    if (compras.length != 0) {
      res.send('El usuario ' + compras[0].usuario.email + ' tiene compras realizadas. No puede ser eliminado.');
    } else {
      db.Carrito.destroy({
        where: {
          usuario_id: req.params.id
        }
      }).then(function() {
        db.Usuario.destroy({
          where: {
              id: req.params.id
          }
      }).then(function() {
        res.redirect("/users/list")
      });
      })
    }
  })
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
        if (articulos.length != 0) {
          var total = 0;
          for (let i = 0; i < articulos.length; i++) {
            total += articulos[i].cantidad * articulos[i].productos.precio;
          }
          total = total.toFixed(2);
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
          db.Carrito.update({
            total: 0
          }, {
            where: {
              usuario_id: req.session.usuarioLogueado.id,
              estado: "abierto"
            },
          }).then(() => {
            res.clearCookie('importe');
          res.redirect('/products/almacen');
        })
      }
    });
  })
  },

  modificarCantidad(req, res) {
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "abierto"
      },
    }).then((carritoId) => {
      if (parseInt(req.body.cantidad) == 0) {
        db.Carrito_Producto.destroy({
          where: {
            producto_id: req.body.productId,
            carrito_id: carritoId.id
          }
        }).then(() => {
          return res.redirect('/users/carrito');
        });
      } else {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          db.Carrito_Producto.update({
            cantidad: req.body.cantidad
          }, {
            where: {
              producto_id: req.body.productId,
              carrito_id: carritoId.id
            }
          }).then(() => {
            return res.redirect('/users/carrito');
          });
        } else {
          db.Producto.findByPk(req.body.productId, {
            include: [{all: true, nested: true}]
          }).then(producto => {
            return res.render('products/productDetail', {producto: producto, errors: errors.errors, usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe})
          })
        }
      }
    }) 
  },

  incrementar(req, res) {
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "abierto"
      },
    }).then((carritoId) => {
      db.Carrito_Producto.update({
        cantidad: parseInt(req.body.cantidad) + 1
      }, {
        where: {
          producto_id: req.body.productId,
          carrito_id: carritoId.id
        }
      }).then(() => {
        return res.redirect('/users/carrito');
      });
    })
  },

  reducir(req, res) {
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "abierto"
      },
    }).then((carritoId) => {
      if (parseInt(req.body.cantidad) == 1) {
        db.Carrito_Producto.destroy({
          where: {
            producto_id: req.body.productId,
            carrito_id: carritoId.id
          }
        }).then(() => {
          db.Carrito_Producto.findAll({
            where: {
              carrito_id: carritoId.id
            }
          }).then((productos) => {
            if (productos.length == 0) {
              res.clearCookie('importe');
              return res.redirect('/users/carrito');
            } else {
              return res.redirect('/users/carrito');
            }
          })
        });
      } else { 
        db.Carrito_Producto.update({
          cantidad: parseInt(req.body.cantidad) - 1
        }, {
          where: {
            producto_id: req.body.productId,
            carrito_id: carritoId.id
          }
        }).then(() => {
          return res.redirect('/users/carrito');
        });
      }
    })
  },

  eliminarItem(req, res) {
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "abierto"
      },
    }).then((carritoId) => {
          db.Carrito_Producto.destroy({
            where: {
              producto_id: req.body.productId,
              carrito_id: carritoId.id
            }
          }).then(() => {
            db.Carrito_Producto.findAll({
              where: {
                carrito_id: carritoId.id
              }
            }).then((productos) => {
              if (productos.length == 0) {
                res.clearCookie('importe');
                return res.redirect('/users/carrito');
              } else {
                return res.redirect('/users/carrito');
              }
            })
          });
      })
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
          //alert('El producto ' + productoYaAgregado.productos.descripcion + 'ya está en el carrito')
          res.redirect("/products/almacen");
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
                return res.redirect("/products/almacen");
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

shop(req, res) {
  // cambio estado del carrito
  db.Carrito.update({
    estado: "proceso"
  }, {
    where: {
      usuario_id: req.session.usuarioLogueado.id,
      estado: "abierto"
    }
  }).then(() => {
    db.Carrito.findOne({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "proceso"
      }
    }).then((carrito) => {
      return res.render('index/instituciones', {carrito, usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe})})
      .catch((e) => console.log(e));
    })
  },
  
  donar(req, res) {
    if(req.body.institucion == "0") {
      res.render('index/instituciones', {
        errors: [
          { msg: 'Debes seleccionar una institución' }
        ]
      });
    } else {
      db.Carrito.update({
        estado: "cerrado",
        institucion_id: req.body.institucion,
        personas_alcanzadas: req.cookies.importe / 350
      }, {
        where: {
          usuario_id: req.session.usuarioLogueado.id,
          estado: "proceso"
        }
      }).then(() => {
        res.clearCookie('importe');
        if (req.body.institucion == 1) {
          res.redirect('/losPiletones');
        } else if (req.body.institucion == 2) {
          res.redirect('/losNiniosPrimero');
        } else if (req.body.institucion == 3) {
          res.redirect('/losBajitos');
        } else {
          res.redirect('/manosEnAccion');
        }
      })
    }
  },

  history(req, res) {
    db.Carrito.findAll({
      where: {
        usuario_id: req.session.usuarioLogueado.id,
        estado: "cerrado"
      },
      order: [["id", "DESC"]],
      include: [{all: true, nested: true}]
    })
      .then((carts) => {
        let carritosId = [];
        let carritos = [];
        for (let i = 0; i < carts.length; i++) {
          carritosId[i]= carts[i].id;
          carritos[i] = db.Carrito_Producto.findAll({
            where: {
              carrito_id: carritosId[i]
            },
            include: [{all: true, nested: true}]
          });
        };
        Promise.all(carritos)
        .then(function(items) {
          res.render("users/historial", { carts, items, usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe });
        })
      })
      .catch((e) => console.log(e));
  },

  showBuyDetail(req, res) {
    db.Carrito.findByPk(req.params.id, {
      include: [{all: true, nested: true}]
    })
   .then((cart) => {
     db.Carrito_Producto.findAll({
       where: {
         carrito_id: cart.id
       },
       include: [{all: true, nested: true}]
     }).then((items) => {
      res.render("users/buyDetail", { cart, items, usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe });
     })
   });     
  }
}

module.exports = usersController;