const express = require('express');
const router = express.Router();
const path = require('path'); 

const limonesController = require('../controllers/limones_controller');



router.get('/nuevo-limon', limonesController.getNuevoLimon);


router.post('/nuevo-limon', limonesController.postNuevoLimon);

router.get('/', limonesController.get);

//router.get('/:Limon_id', limonesController.getLimon);

module.exports = router;