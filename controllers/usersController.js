const usersController = {
    register: function(req, res, next) {
        res.render('register');
      },

    login: function(req, res, next) {
        res.render('login');
      },

    passwordReset: function(req, res, next) {
        res.render('passwordReset');
      },

}

module.exports = usersController;