const express = require('express');
const router = express.Router();
const path = require('path'); 

const usuariosController = require('../controllers/usuarios_controller');



router.get('/logout', usuariosController.logout);

router.get('/new', usuariosController.getNewUser);



router.post('/new', usuariosController.postNewUser);


module.exports = router;