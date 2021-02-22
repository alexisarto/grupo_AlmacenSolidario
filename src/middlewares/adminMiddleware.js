function adminMiddleware(req, res, next) {
    console.log('tratando de ingresar al listado de usuarios');
    console.log(req.session.usuarioLogueado);
    if (req.session.usuarioLogueado != 'undefined' && req.session.usuarioLogueado.perfil_id == 2) {
        console.log('el usuario logueado es: ' + req.session.usuarioLogueado);
        next();
    } else {
        console.log('el usuario logueado no es administrador. Es: ' + req.session.usuarioLogueado);
        res.send('Esta página es sólo para administradores'); 
    }
}

module.exports = adminMiddleware;