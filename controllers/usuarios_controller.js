const Usuario = require('../models/usuario');

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getNewUser = (request, response, next) => {
    response.render('nuevo_usuario', {  
        titulo: "Nuevo usuario",
    });
};

exports.postNewUser = (request, response, next) => {
    const usuario = new Usuario(request.body.username, request.body.nombre, request.body.password);

    usuario.save()
        .then(() => {
            request.session.ultimo_agregado = request.body.nombre;;
            response.redirect('/limones');
        }).catch( err => {
            console.log(err);
            response.redirect('new');    
        });
    
};