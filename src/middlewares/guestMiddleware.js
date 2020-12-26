function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        console.log(req.session.usuarioLogueado.id);
        res.render('users/profileDetail', {user: req.session.usuarioLogueado});
    }
}

module.exports = guestMiddleware;