const usersController = {
    register: function(req, res, next) {
        res.render('users/register');
      },

    login: function(req, res, next) {
        res.render('users/login');
      },

    passwordReset: function(req, res, next) {
        res.render('users/passwordReset');
      },

}

module.exports = usersController;