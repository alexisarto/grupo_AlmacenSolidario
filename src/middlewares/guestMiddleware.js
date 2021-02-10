function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.render('users/detallePerfil', {user: req.session.usuarioLogueado});
    }
}

module.exports = guestMiddleware;