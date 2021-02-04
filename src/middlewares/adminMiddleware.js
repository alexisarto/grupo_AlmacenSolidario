function adminMiddleware(req, res, next) {
    if (req.session.usuarioLogueado.perfil_id == 2) {
        next();
    } else {
        res.send('Esta página es sólo para administradores'); 
    }
}

module.exports = adminMiddleware;