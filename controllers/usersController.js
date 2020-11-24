const fs = require('fs');
const bcryptjs = require('bcryptjs');
var {check, validationResult, body} = require('express-validator');
var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', 'utf-8'));
const usersController = {
    register: function(req, res, next) {
        res.render('users/register');
      },

    store: function(req, res, next) {
      let errors = validationResult(req);
      if (errors.isEmpty()) {
        let newId;
        if (users.length > 0) {
          newId = parseInt(users[users.length -1].id) + 1;
        } else {
          newId = 1;
        }
        let newUser = {
          id: newId,
          nombre: req.body.nombre,
          email: req.body.email,
          contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10)
      };
        users.push(newUser);
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(__dirname + '/../data/users.json', usersJSON);
          res.send('se ha registrado el usuario ' + req.body.nombre);
        } else {
          res.render('users/register', {errors: errors.errors});
        }
      },

    login: function(req, res, next) {
        res.render('users/login');
      },

    processLogin: function(req, res, next) {
      let errors = validationResult(req);
      if (errors.isEmpty()) {
      for (let i = 0; i < users.length; i++) {
        if (req.body.email == users[i].email && bcryptjs.compareSync(req.body.contrasenia, users[i].contrasenia)) {
          var usuarioALoguearse = users[i];
          break;
        }
      }
      if (usuarioALoguearse == undefined) {
        return res.render('users/login', {errors: [
          {msg: 'Usuario / contraseña inválidos'}
        ]});
      }
      req.session.usuarioLogueado = usuarioALoguearse;
      res.render('index/home');
    } else {
      return res.render('users/login', {errors: errors.errors});
    }
  },
      
    passwordReset: function(req, res, next) {
        res.render('users/passwordReset');
      }

}

module.exports = usersController;