const express = require('express');
const router = express.Router();
const path = require('path'); 
const isAuth = require('../util/is-auth');

const limonesController = require('../controllers/limones_controller');



router.get('/nuevo-limon', isAuth, limonesController.getNuevoLimon);


router.post('/nuevo-limon', isAuth, limonesController.postNuevoLimon);

router.get('/', isAuth, limonesController.get);

router.get('/:Limon_id', isAuth, limonesController.getLimon);

router.post('/eliminar', limonesController.postLimon);

module.exports = router;