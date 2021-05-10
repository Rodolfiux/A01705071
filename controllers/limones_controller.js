const Limon = require("../models/limon");


exports.getNuevoLimon = (request, response, next) => {
    response.render('nuevo_limon', { 
        titulo: "Nuevo limon" 
    });
};
exports.postNuevoLimon = (request, response, next) => {
    console.log(request.body);
    const limon = new Limon(request.body.nombre, request.body.descripcion,'https://www.cocinavital.mx/wp-content/uploads/2019/06/cultivar-planta-limones-maceta-casa.jpg');
    
    limon.save()
        .then(() => {
            request.session.ultimo_agregado = request.body.nombre;
            response.redirect('/limones');
        }).catch(err =>{
            console.log(err);
            response.redirect('/limones/nuevo-limon');
            
        });

    
    
    
     
};

exports.get = (request, response, next) => {

    response.setHeader('Set-Cookie', 'semilla=Tienes una semilla; HttpOnly');
    console.log(request.cookies.semilla);

 Limon.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('Limones', {
            Limones: rows,
            titulo: "Limones",
            ultimo_agregado: request.session.ultimo_agregado === undefined ? "No se agregaron limones" : request.session.ultimo_agregado 
        });
    })

    .catch(err => console.log(err));
}

exports.getLimon = (request, response, next) => {

    const id = request.params.Limon_id;

 Limon.fetchOne(id)
    .then(([rows, fieldData]) => {
        response.render('Limones', {
            Limones: rows,
            titulo: "Limones",
            ultimo_agregado: request.session.ultimo_agregado === undefined ? "No se agregaron limones" : request.session.ultimo_agregado 
        });
    })

    .catch(err => console.log(err));
}

