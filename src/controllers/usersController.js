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
      res.redirect('/home');
    }
    
    });
  } else {
    return res.render('users/ingresar', { errors: errors.errors });
  }
},

  carrito(req, res) {
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
        db.sequelize.query('SELECT SUM(cantidad * precio) AS total FROM carrito_producto', {type: db.sequelize.QueryTypes.SELECT})
          .then(resultado => {
            db.Carrito.update({
              total: resultado[0].total
            }, {
              where: {
                usuario_id: req.session.usuarioLogueado.id
              }
          })
        })
        .then(() => {
          res.cookie('importe', carritoId.total, {maxAge: 7200000})
          return res.render("users/carrito", {items, carritoId, usuarioLogueado: req.session.usuarioLogueado, importe: req.cookies.importe});
        })
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
          db.sequelize.query('SELECT SUM(cantidad * precio) AS total FROM carrito_producto', {type: db.sequelize.QueryTypes.SELECT})
          .then(resultado => {
            db.Carrito.update({
              total: resultado[0].total
            }, {
              where: {
                usuario_id: req.session.usuarioLogueado.id
              }
          })
        })
        .then(() => res.redirect("/users/carrito"))
        .catch((e) => console.log(e));
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
}

module.exports = usersController;