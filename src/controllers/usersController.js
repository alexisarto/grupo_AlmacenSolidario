const fs = require('fs');
const bcryptjs = require('bcryptjs');
var { check, validationResult, body } = require('express-validator');
var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', 'utf-8'));
const usersController = {
  register: function (req, res, next) {
    res.render('users/register');
  },

  store: function (req, res, next) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let newId;
      if (users.length > 0) {
        newId = parseInt(users[users.length - 1].id) + 1;
      } else {
        newId = 1;
      }
      let newUser = {
        id: newId,
        nombre: req.body.nombre,
        email: req.body.email,
        contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
        perfil: "usuario"
      };
      users.push(newUser);
      let usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(__dirname + '/../data/users.json', usersJSON);
      req.session.usuarioLogueado = newUser;
      res.redirect('/home');
    } else {
      res.render('users/register', { errors: errors.errors });
    }
  },

  login: function (req, res, next) {
    res.render('users/login');
  },

  processLogin: function (req, res, next) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      for (let i = 0; i < users.length; i++) {
        if (req.body.email == users[i].email) {
          if (bcryptjs.compareSync(req.body.contrasenia, users[i].contrasenia)) {
            var usuarioALoguearse = users[i];
            break;
          }
        }
      }
      if (usuarioALoguearse == undefined) {
        return res.render('users/login', {
          errors: [
            { msg: 'Usuario / contraseña inválidos' }
          ], email: req.body.email
        });
      }
      req.session.usuarioLogueado = usuarioALoguearse;
      if(req.body.recordame != undefined) {
        res.cookie('recordame', usuarioALoguearse.email, {maxAge: 7200000})
      }
      res.redirect('/home');
    } else {
      return res.render('users/login', { errors: errors.errors });
    }
  },

  profileDetail: function (req, res, next) {
    const idUser = req.params.id;
    const user = users.filter(x => x.id == idUser)[0];
    if (user) {
      res.render('users/profileDetail', { user: user });
    } else {
      res.send('Usuario invalido');
    }
  },
  
  profileEdit: function (req, res, next) {
    const idUser = req.params.id;
    const user = users.filter(x => x.id == idUser)[0];
    if (user) {
      res.render('users/profileEdit', { user: user });
    } else {
      res.send('Usuario invalido');
    }
  },

  profileUpdate: function (req, res, next) {
    const errors = validationResult(req);
    const idUser = req.params.id;
    const user = users.filter(x => x.id == idUser)[0];
    
    const isPasswordValid = bcryptjs.compareSync(req.body.currentContrasenia, user.contrasenia);
    if (!isPasswordValid) {
        errors.errors.push({msg: "La contraseña actual es invalida"});
    }

    if (errors.isEmpty()) {
      user.nombre = req.body.nombre;
      const newPassword = req.body.contrasenia;
      if (newPassword) {
        user.contrasenia = bcryptjs.hashSync(newPassword, 10);
      }
      req.session.usuarioLogueado = user;
      const editUsersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(__dirname + '/../data/users.json', editUsersJSON);
      res.redirect('/home');
    } else {
      const userBeingUpdated = {
        id: user.id,
        email: user.email,
        nombre: req.body.nombre
      };
      return res.render('users/profileEdit', { user: userBeingUpdated, errors: errors.errors });
    }
  },

  logout: function (req, res, next) {
    res.cookie("recordame", "", { expires: new Date() }); 
    req.session.destroy();
    res.redirect('/home');
  },

  passwordReset: function (req, res, next) {
    res.render('users/passwordReset');
  }

}

module.exports = usersController;