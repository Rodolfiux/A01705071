const limon = require('../models/limon');


const db = require('../util/database');



module.exports = class Limon {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre,descripcion,imagen,fecha) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        //this.fecha  = new Date().toLocaleDateString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO limones (nombre, descripcion, imagen) VALUES (?, ?, ?)',
            [this.nombre, this.descripcion, this.imagen]
        );
        
    }
       //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        
        return db.execute('SELECT * FROM limones')
                
    }

    static fetchOne(id) {
    return db.execute('SELECT * FROM limones WHERE id = ?', [id]);
        
   }
   static delete(id) {

    return db.execute('DELETE FROM limones WHERE id = ?', [id]);
    }

}